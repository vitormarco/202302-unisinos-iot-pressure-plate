import styles from './styles.module.css';
import { IWrapperProps } from './types';

const Wrapper = ({ children, max = 100, min = 0, value = 0 }: IWrapperProps) => {
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemax={max}
      aria-valuemin={min}
      className={styles.wrapper}
    >
      {children}
    </div>
  );
};

export default Wrapper;
