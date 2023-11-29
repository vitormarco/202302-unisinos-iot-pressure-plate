export function getTextToShow(info?: number, sufix = '') {
  if (info === undefined) {
    return 'Aguardando informação';
  }

  return `${info}${sufix}`;
}

export function getSubtractionPercentageLeftRight(left?: number, right?: number) {
  if (left === undefined || right === undefined) {
    return undefined;
  }

  return Math.abs(left - right);
}
