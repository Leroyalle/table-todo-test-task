import type { FC } from 'react';
import { clsx } from 'clsx';
import { Users } from 'lucide-react';

interface Props {
  className?: string;
}

export const UserAvatar: FC<Props> = ({ className }) => {
  return (
    <div
      className={clsx(
        'p-1 border-[rgba(255,255,255,0.1)] border-[1px] bg-[rgba(255,255,255,0.04)] rounded-full',
        className,
      )}>
      <Users size={16} />
    </div>
  );
};
