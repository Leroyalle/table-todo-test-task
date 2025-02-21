import type { FC } from 'react';
import { clsx } from 'clsx';
import { UsersListHeadItem } from './ui';

interface Props {
  className?: string;
}

export const UsersListHead: FC<Props> = ({ className }) => {
  return (
    <thead className={clsx('', className)}>
      <tr className="text-[8px] text-muted/30 border-spacing-3 border-collapse">
        <UsersListHeadItem value="#" className="pr-0 w-fit" />
        <UsersListHeadItem value="USERNAME" />
        <UsersListHeadItem value="TO-DO-COUNT" className="text-end" />
      </tr>
    </thead>
  );
};
