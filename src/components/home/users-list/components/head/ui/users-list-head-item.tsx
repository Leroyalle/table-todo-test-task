import type { FC } from 'react';
import { clsx } from 'clsx';

interface Props {
  value: string;
  className?: string;
}

export const UsersListHeadItem: FC<Props> = ({ value, className }) => {
  return <th className={clsx('p-3 text-start font-medium', className)}>{value}</th>;
};
