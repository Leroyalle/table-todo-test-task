import type { FC } from 'react';
import { clsx } from 'clsx';
import { User, UsersListHead } from './components';

interface Props {
  className?: string;
}

export const UsersList: FC<Props> = ({ className }) => {
  return (
    <table className={clsx('border-[1px] border-gray-400 w-full', className)}>
      <UsersListHead />
      <tbody>
        <tr className="text-[8px] border-spacing-3 border-collapse text-xs border-b-[1px] border-gray-400">
          <td className="p-3">1</td>
          <User name="John Doe" email="rjBtM@example.com" />
          <td className="p-3 text-center">3</td>
        </tr>
      </tbody>
    </table>
  );
};
