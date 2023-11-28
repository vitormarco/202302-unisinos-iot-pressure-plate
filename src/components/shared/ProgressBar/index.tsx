import Bar from './Bar';
import Wrapper from './Wrapper';

const ProgressBar = () => {
  return (
    <Wrapper>
      <Bar value={40} />
    </Wrapper>
  );
};

export default ProgressBar;
