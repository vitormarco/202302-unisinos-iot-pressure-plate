import styles from './styles.module.css';
import { IBarProps } from './types';

const Bar = ({ value = 0 }: IBarProps) => {
  const style = { '--width': value + '%' } as React.CSSProperties;

  return (
    <div className={styles.wrapperBar}>
      <div style={style} className={styles.bar} />
    </div>
  );
};

export default Bar;
