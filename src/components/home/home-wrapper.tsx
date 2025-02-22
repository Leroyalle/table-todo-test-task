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
  const {
    data: users,
    isPending,
    isError,
    cursor,
    isFetchingNextPage,
  } = useGetUsersInfiniteScroll();

  if (isError) {
    return <div>Ошибка получения даных</div>;
  }

  return (
    <Container>
      <section className={clsx('h-full p-10', className)}>
        <HomeHead className="mb-6 tablet:mb-12" />
        <UsersList users={users} isLoading={isPending} />
        {users && !isFetchingNextPage && cursor}
      </section>
    </Container>
  );
};
