import Bar from './Bar';
import { IProgressBarProps } from './types';
import Wrapper from './Wrapper';

const ProgressBar = (props: IProgressBarProps) => {
  return (
    <Wrapper {...props}>
      <Bar value={props.value} />
    </Wrapper>
  );
};

export default ProgressBar;
