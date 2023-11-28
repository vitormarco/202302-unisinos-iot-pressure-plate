export interface IProgressBarProps {
  min?: number;
  max?: number;
  value?: number;
}

export interface IWrapperProps extends IProgressBarProps {
  children: React.ReactNode;
}

export interface IBarProps {
  value?: number;
}
