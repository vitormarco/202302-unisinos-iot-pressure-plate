import { ClassValue } from 'clsx';

export const getBarBgColor = (value: number, defaultClass: ClassValue) => {
  if (value > 95) {
    return 'bg-red-600';
  }

  if (value > 90) {
    return 'bg-red-500';
  }

  if (value > 85) {
    return 'bg-red-400';
  }

  if (value > 73) {
    return 'bg-orange-600';
  }

  if (value > 61) {
    return 'bg-orange-500';
  }

  if (value > 49) {
    return 'bg-orange-400';
  }

  if (value > 37) {
    return 'bg-yellow-600';
  }

  if (value > 25) {
    return 'bg-yellow-500';
  }

  if (value > 2) {
    return 'bg-yellow-400';
  }

  return defaultClass;
};
