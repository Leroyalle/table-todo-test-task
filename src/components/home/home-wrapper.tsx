import type { FC } from 'react';
import { clsx } from 'clsx';
import { Container } from '@/components';
import { HomeHead } from './home-head';
import { UsersList } from './users-list';

interface Props {
  className?: string;
}

export const HomeWrapper: FC<Props> = ({ className }) => {
  return (
    <Container>
      <section className={clsx('bg-primary h-screen p-10', className)}>
        <HomeHead />
        <UsersList />
      </section>
    </Container>
  );
};
