import FootPrint from '@/icons/FootPrint';
import { mergeClassName } from '@/utils/mergeClassName';
import { IRightFootFeedbackProps } from './types';

const defaultStyles = '-scale-x-100 transition-colors duration-300 ease-in-out';

const RightFootFeedback = ({ isOverPressure = false }: IRightFootFeedbackProps) => {
  const bgColor = isOverPressure ? 'fill-red-500' : 'fill-slate-950';

  return <FootPrint className={mergeClassName(defaultStyles, bgColor)} size={160} />;
};

export default RightFootFeedback;
