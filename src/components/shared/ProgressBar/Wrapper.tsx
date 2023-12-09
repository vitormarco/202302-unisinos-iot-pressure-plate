import { mergeClassName } from '@/utils/mergeClassName';
import styles from './styles.module.css';
import { IWrapperProps } from './types';

const Wrapper = ({ children, max = 100, min = 0, value = 0, className }: IWrapperProps) => {
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemax={max}
      aria-valuemin={min}
      className={mergeClassName(styles.wrapper, className)}
    >
      {children}
    </div>
  );
};

export default Wrapper;
