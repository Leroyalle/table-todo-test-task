import type { FC } from 'react';
import { clsx } from 'clsx';
import { UsersListHeadItem } from './ui';

interface Props {
  className?: string;
}

export const UsersListHead: FC<Props> = ({ className }) => {
  return (
    <thead className={clsx('border-b-[1px] border-gray-400', className)}>
      <tr className="text-[8px] text-muted/30 border-spacing-3 border-collapse">
        <UsersListHeadItem value="#" />
        <UsersListHeadItem value="USERNAME" />
        <UsersListHeadItem value="TO-DO-COUNT" />
      </tr>
    </thead>
  );
};
