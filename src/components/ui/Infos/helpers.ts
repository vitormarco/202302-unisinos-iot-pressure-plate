import { PressureType } from '@/hooks/useGetPressure/types';

export function getPressureSideValue({ left, right }: PressureType) {
  if ((left <= 1 && right <= 1) || left === right) {
    return { left: 1, right: 1 };
  }

  if (left > right) {
    return {
      left: left - right,
      right: 0
    };
  }

  return {
    right: right - left,
    left: 0
  };
}
