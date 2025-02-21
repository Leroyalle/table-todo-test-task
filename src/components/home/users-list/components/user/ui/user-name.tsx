import type { FC } from 'react';
import { clsx } from 'clsx';

interface Props {
  name: string;
  className?: string;
}

export const UserName: FC<Props> = ({ name, className }) => {
  return <p className={clsx('', className)}>{name}</p>;
};
