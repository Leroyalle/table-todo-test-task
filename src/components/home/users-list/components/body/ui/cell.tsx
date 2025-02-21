import type { FC } from 'react';
import { clsx } from 'clsx';

interface Props {
  value: string;
  className?: string;
}

export const Cell: FC<Props> = ({ value, className }) => {
  return <td className={clsx('p-3 text-center border-b border-gray-500', className)}>{value}</td>;
};
