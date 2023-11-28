import Card from '@/components/shared/Card';
import LeftFootFeedback from '../LeftFootFeedback';
import RightFootFeedback from '../RightFootFeedback';

const FeetFeedback = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card>
        <LeftFootFeedback />
      </Card>
      <Card>
        <RightFootFeedback />
      </Card>
    </div>
  );
};

export default FeetFeedback;
