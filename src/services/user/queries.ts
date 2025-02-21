import { infiniteQueryOptions } from '@tanstack/react-query';
import { userService } from './user-api';

export const getUsersInfiniteQueryOptions = () => {
  const perPage = 10;
  return infiniteQueryOptions({
    queryKey: ['users'],
    queryFn: (meta) => userService.getAll(meta.pageParam, perPage),
    initialPageParam: 1,
    select: ({ pages }) => pages.flatMap((page) => page),
    getNextPageParam(lastPage, allPages) {
      return lastPage.length < perPage ? undefined : allPages.length + 1;
    },
    refetchOnWindowFocus: false,
  });
};
