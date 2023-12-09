import { mergeClassName } from '@/utils/mergeClassName';
import { getBarBgColor } from './helpers';
import styles from './styles.module.css';
import { IBarProps } from './types';

const Bar = ({ value = 0 }: IBarProps) => {
  const style = { '--width': value + '%' } as React.CSSProperties;
  const barColor = getBarBgColor(value, styles['default-bg-color']);

  return (
    <div className={styles.wrapperBar}>
      <div style={style} className={mergeClassName(styles.bar, barColor)} />
    </div>
  );
};

export default Bar;
