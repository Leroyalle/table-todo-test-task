import { Cursor } from '@/components';
import { getUsersWithTodos } from '@/lib';
import { getTodosQueryOptions, getUsersInfiniteQueryOptions } from '@/services';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const useGetUsersInfiniteScroll = () => {
  const [ref, inView] = useInView();

  const { data: todos } = useQuery(getTodosQueryOptions());
  const {
    data: users,
    isPending,
    isError,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(getUsersInfiniteQueryOptions());

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  const enhancedUsers = getUsersWithTodos(users, todos);
  const cursor = <Cursor isFetching={isFetchingNextPage} ref={ref} />;

  return { data: enhancedUsers, isPending, isError, cursor, isFetchingNextPage };
};
