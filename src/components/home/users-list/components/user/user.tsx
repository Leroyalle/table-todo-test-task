import type { FC } from 'react';
import { clsx } from 'clsx';
import { UserAvatar, UserEmail, UserName } from './ui';

interface Props {
  name: string;
  email: string;
  className?: string;
}

export const User: FC<Props> = ({ name, email, className }) => {
  return (
    <td className={clsx('p-3 truncate', className)}>
      <div className="flex items-center gap-x-[10px]">
        <UserAvatar />
        <div className="flex flex-col">
          <UserName name={name} />
          <UserEmail email={email} />
        </div>
      </div>
    </td>
  );
};
