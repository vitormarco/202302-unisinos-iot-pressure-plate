import { useEffect, useState } from 'react';
import { getPatientInfo } from './helpers';
import { IUsePatientPhysiologicalDataProps, InfosType } from './types';

const usePatientPhysiologicalData = ({ pressure }: IUsePatientPhysiologicalDataProps) => {
  const [infos, setInfos] = useState<InfosType>();

  useEffect(() => {
    const setupInfos = () => {
      const formattedInfo = getPatientInfo(pressure);
      setInfos(formattedInfo);
    };

    setupInfos();
  }, [pressure]);

  return infos;
};

export default usePatientPhysiologicalData;
