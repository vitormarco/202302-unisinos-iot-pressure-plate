import { ClassValue } from 'clsx';

export const getBarBgColor = (value: number, defaultClass: ClassValue) => {
  if (value > 84) {
    return 'bg-red-600';
  }

  if (value > 68) {
    return 'bg-red-500';
  }

  if (value > 52) {
    return 'bg-red-400';
  }

  if (value > 44) {
    return 'bg-orange-600';
  }

  if (value > 36) {
    return 'bg-orange-500';
  }

  if (value > 28) {
    return 'bg-orange-400';
  }

  if (value > 20) {
    return 'bg-yellow-600';
  }

  if (value > 12) {
    return 'bg-yellow-500';
  }

  if (value > 1) {
    return 'bg-yellow-400';
  }

  return defaultClass;
};
