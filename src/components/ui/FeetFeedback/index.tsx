import Card from '@/components/shared/Card';
import LeftFootFeedback from '../LeftFootFeedback';
import RightFootFeedback from '../RightFootFeedback';
import { IFeetFeedbackProps } from './types';

const FeetFeedback = ({
  isLeftOverPressure = false,
  isRightOverPressure = false
}: IFeetFeedbackProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card>
        <LeftFootFeedback isOverPressure={isLeftOverPressure} />
      </Card>
      <Card>
        <RightFootFeedback isOverPressure={isRightOverPressure} />
      </Card>
    </div>
  );
};

export default FeetFeedback;
