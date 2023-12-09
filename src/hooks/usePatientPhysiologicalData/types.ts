export interface IUsePatientPhysiologicalDataProps {
  pressure: PressureType;
}

export type PressureType = {
  left: number;
  right: number;
};

export type InfosType = {
  percentage: {
    left: number;
    right: number;
  };
  kg: {
    left: number;
    right: number;
    total: number;
  };
  overPressure: {
    isLeft: boolean;
    isRight: boolean;
  };
  received?: boolean;
};
