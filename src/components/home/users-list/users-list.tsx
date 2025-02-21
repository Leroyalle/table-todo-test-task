import type { FC } from 'react';
import { clsx } from 'clsx';
import { User, UsersListHead } from './components';
import { UserWithTodos } from '@/types';

interface Props {
  items: UserWithTodos[] | undefined;
  className?: string;
}

export const UsersList: FC<Props> = ({ items, className }) => {
  if (!items) {
    return null;
  }

  return (
    <table className={clsx('border-[1px] border-gray-400 w-full', className)}>
      <UsersListHead />
      <tbody>
        {items.map((user, index) => (
          <tr
            key={user.id}
            className="text-[8px] border-spacing-3 border-collapse text-xs border-b-[1px] border-gray-400">
            <td className="p-3">{index + 1}</td>
            <User name={user.name} email={user.email} />
            <td className="p-3 text-center">{user.todos.length}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
