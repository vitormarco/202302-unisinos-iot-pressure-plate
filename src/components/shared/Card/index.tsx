import { mergeClassName } from '@/utils/mergeClassName';
import { ICardProps } from './types';

const DEFAULT_CLASSES =
  'flex justify-center justify-items-center rounded-xl border-2 p-5 shadow-md';

const Card = ({ children, className }: ICardProps) => {
  return (
    <div role="contentinfo" className={mergeClassName(DEFAULT_CLASSES, className)}>
      {children}
    </div>
  );
};

export default Card;
