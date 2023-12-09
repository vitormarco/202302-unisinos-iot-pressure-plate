'use client';

import ProgressBar from '@/components/shared/ProgressBar';
import FeetFeedback from '@/components/ui/FeetFeedback';
import Meter from '@/components/ui/Meter';
import useGetPressure from '@/hooks/useGetPressure';
import usePatientPhysiologicalData from '@/hooks/usePatientPhysiologicalData';
import TextFeedback from '../TextFeedback';
import { getPressureSideValue } from './helpers';

const Infos = () => {
  const pressure = useGetPressure();
  const info = usePatientPhysiologicalData({ pressure });
  const pressureSide = getPressureSideValue({
    left: info?.percentage.left ?? 0,
    right: info?.percentage.right ?? 0
  });

  return (
    <div className="grid grid-cols-1 gap-20">
      <section className="grid grid-cols-1 gap-8">
        <FeetFeedback
          isLeftOverPressure={info?.overPressure?.isLeft}
          isRightOverPressure={info?.overPressure?.isRight}
        />
        <Meter>
          <ProgressBar className="-scale-x-100" min={0} max={100} value={pressureSide.left} />
          <ProgressBar min={0} max={100} value={pressureSide.right} />
        </Meter>
      </section>
      <section className="grid grid-cols-1">
        <TextFeedback info={info} />
      </section>
    </div>
  );
};

export default Infos;
