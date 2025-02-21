import type { FC } from 'react';
import { clsx } from 'clsx';
import { Container } from '@/components';
import { HomeHead } from './home-head';
import { UsersList } from './users-list';
import { useGetUsersInfiniteScroll } from '@/hooks';

interface Props {
  className?: string;
}

export const HomeWrapper: FC<Props> = ({ className }) => {
  const { data: users, cursor, isFetchingNextPage } = useGetUsersInfiniteScroll();

  return (
    <Container>
      <section className={clsx('bg-primary h-full p-10', className)}>
        <HomeHead />
        <UsersList items={users} />
        {users && !isFetchingNextPage && cursor}
      </section>
    </Container>
  );
};
