import { HomeWrapper } from '@/components';
import clsx from 'clsx';
import React from 'react';

interface Props {
  className?: string;
}

export const Home: React.FC<Props> = ({ className }) => {
  return (
    <main className={clsx('', className)}>
      <HomeWrapper />
    </main>
  );
};
