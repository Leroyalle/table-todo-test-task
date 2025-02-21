import type { FC } from 'react';
import { clsx } from 'clsx';
import { Colgroup, UsersListHead } from './components';
import { UserWithTodos } from '@/types';
import { UsersListBody } from './components/body';

interface Props {
  users: UserWithTodos[] | undefined;
  className?: string;
}

export const UsersList: FC<Props> = ({ users, className }) => {
  if (!users) {
    return null;
  }

  return (
    <table
      className={clsx(
        'border-[1px] border-gray-500 w-full rounded-xl',
        'border-separate border-spacing-0',
        'table-fixed',
        className,
      )}>
      <Colgroup />
      <UsersListHead />
      <UsersListBody users={users} />
    </table>
  );
};
