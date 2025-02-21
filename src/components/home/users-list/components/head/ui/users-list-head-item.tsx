import type { FC } from 'react';
import { clsx } from 'clsx';

interface Props {
  value: string;
  className?: string;
}

export const UsersListHeadItem: FC<Props> = ({ value, className }) => {
  return (
    <th className={clsx('p-3 text-start font-medium border-b-[1px] border-gray-500', className)}>
      {value}
    </th>
  );
};
