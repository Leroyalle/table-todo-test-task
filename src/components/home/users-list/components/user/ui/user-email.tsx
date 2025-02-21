import type { FC } from 'react';
import { clsx } from 'clsx';

interface Props {
  email: string;
  className?: string;
}

export const UserEmail: FC<Props> = ({ email, className }) => {
  return <p className={clsx('', className)}>{email}</p>;
};
