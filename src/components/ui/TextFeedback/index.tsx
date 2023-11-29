import Card from '@/components/shared/Card';
import { InfosType } from '@/hooks/usePatientPhysiologicalData/types';
import { getSubtractionPercentageLeftRight, getTextToShow } from './helpers';

const TextFeedback = ({ info }: { info?: InfosType }) => {
  const differencePercentage = getSubtractionPercentageLeftRight(
    info?.percentage?.left,
    info?.percentage?.right
  );

  return (
    <Card className="flex flex-col justify-start gap-5 border border-slate-400">
      <h1 className="w-full text-xl font-bold">Informações do paciente</h1>

      <ul className="grid grid-cols-1 gap-3">
        <li className="grid grid-cols-1">
          <span className="text-lg font-bold">Massa corporal</span>
        </li>
        <li className="grid grid-cols-2 gap-4">
          <span className="font-semibold">Peso lado esquerdo:</span>
          <span>{getTextToShow(info?.kg?.left, '(kg)')}</span>
        </li>
        <li className="grid grid-cols-2 gap-4">
          <span className="font-semibold">Peso lado direito:</span>
          <span>{getTextToShow(info?.kg?.right, '(kg)')}</span>
        </li>
        <li className="grid grid-cols-2 gap-4">
          <span className="font-semibold">Peso total:</span>
          <span className="pb-5">{getTextToShow(info?.kg?.total, '(kg)')}</span>
        </li>
        <li className="grid grid-cols-1 gap-2 border-t-2">
          <span className="pt-5 text-lg font-bold">Pressão</span>
        </li>
        <li className="grid grid-cols-2 gap-4">
          <span className="font-semibold">Percentual lado esquerdo:</span>
          <span>{getTextToShow(info?.percentage?.left, '%')}</span>
        </li>
        <li className="grid grid-cols-2 gap-4">
          <span className="font-semibold">Percentual lado direito:</span>
          <span>{getTextToShow(info?.percentage?.right, '%')}</span>
        </li>
        <li className="grid grid-cols-2 gap-4">
          <span className="font-semibold">Diferença percentual:</span>
          <span>{getTextToShow(differencePercentage, '%')}</span>
        </li>
      </ul>
    </Card>
  );
};

export default TextFeedback;
