import type { FC } from 'react';
import { clsx } from 'clsx';
import { UserWithTodos } from '@/types';
import { User } from '../user';
import { Cell } from './ui';

interface Props {
  users: UserWithTodos[];
  className?: string;
}

export const UsersListBody: FC<Props> = ({ users, className }) => {
  return (
    <tbody className={clsx('', className)}>
      {users.map((user, index) => (
        <tr key={user.id} className="text-xs">
          <Cell value={`${index + 1}`} />
          <User name={user.name} email={user.email} className="border-b border-gray-500" />
          <Cell value={`${user.todos.length}`} className="tablet:text-start" />
        </tr>
      ))}
    </tbody>
  );
};
