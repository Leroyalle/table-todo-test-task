import { queryOptions } from '@tanstack/react-query';
import { todoService } from './todo-api';

export const getTodosQueryOptions = () => {
  return queryOptions({
    queryKey: ['todos'],
    queryFn: todoService.getAll,
    refetchOnWindowFocus: false,
  });
};
