import { useEffect, useState } from 'react';
import { getPatientInfo } from './helpers';
import { IUsePatientPhysiologicalDataProps, InfosType } from './types';

const usePatientPhysiologicalData = ({ pressure }: IUsePatientPhysiologicalDataProps) => {
  const [infos, setInfos] = useState<InfosType>();

  useEffect(() => {
    const setupInfos = () => {
      if (!(pressure.left > 1) && !(pressure.right > 1)) {
        return undefined;
      }

      const formattedInfo = getPatientInfo(pressure);
      setInfos({ ...formattedInfo, received: true });
    };

    setupInfos();
  }, [pressure]);

  return infos;
};

export default usePatientPhysiologicalData;
