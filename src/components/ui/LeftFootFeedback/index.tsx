import FootPrint from '@/icons/FootPrint';
import { mergeClassName } from '@/utils/mergeClassName';
import { ILeftFootFeedbackProps } from './types';

const defaultStyles = 'transition-colors duration-300 ease-in-out';

const LeftFootFeedback = ({ isOverPressure = false }: ILeftFootFeedbackProps) => {
  const bgColor = isOverPressure ? 'fill-red-500' : 'fill-slate-950';

  return <FootPrint className={mergeClassName(defaultStyles, bgColor)} size={160} />;
};

export default LeftFootFeedback;
