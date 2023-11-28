import { ICardProps } from './types';

const Card = ({ children }: ICardProps) => {
  return (
    <div
      role="contentinfo"
      className="flex justify-center justify-items-center rounded-xl border-2 p-5 shadow-md"
    >
      {children}
    </div>
  );
};

export default Card;
