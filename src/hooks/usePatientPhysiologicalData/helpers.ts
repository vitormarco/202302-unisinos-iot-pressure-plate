import { getKg } from '@/utils/mass';
import { getPercentage } from '@/utils/percentage';
import { PressureType } from './types';

const MAX_PRESSURE = 21000; // 50kg
const PROPORTIONAL_PRESSURE_KG = 420;

function getNaturalNumbers(value: number) {
  if (value < 1) {
    return 0;
  }

  return value;
}

function getPressurePercentage(pressure: PressureType) {
  const left = getNaturalNumbers(getPercentage(pressure.left, MAX_PRESSURE));
  const right = getNaturalNumbers(getPercentage(pressure.right, MAX_PRESSURE));

  return { left, right };
}

function getPressureInKg(pressure: PressureType) {
  const left = getNaturalNumbers(getKg(pressure.left, PROPORTIONAL_PRESSURE_KG));
  const right = getNaturalNumbers(getKg(pressure.right, PROPORTIONAL_PRESSURE_KG));
  const total = getNaturalNumbers(left + right);

  return {
    left,
    right,
    total
  };
}

function getSideOverPressure(pressure: PressureType) {
  const isLeft = pressure.left - pressure.right > 1;
  const isRight = pressure.right - pressure.left > 1;

  return { isLeft, isRight };
}

export function getPatientInfo(pressure: PressureType) {
  const percentage = getPressurePercentage(pressure);
  const kg = getPressureInKg(pressure);
  const overPressure = getSideOverPressure(pressure);

  return { percentage, kg, overPressure };
}
