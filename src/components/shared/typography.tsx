import clsx from 'clsx';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export const Typography: React.FC<Props> = ({ children, className }) => {
  return <p className={clsx('text-sm', className)}>{children}</p>;
};
