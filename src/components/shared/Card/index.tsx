import { ICardProps } from './types';

const Card = ({ children }: ICardProps) => {
  return (
    <div
      role="contentinfo"
      className="flex justify-center justify-items-center rounded-xl border-2 border-slate-950 p-5"
    >
      {children}
    </div>
  );
};

export default Card;
