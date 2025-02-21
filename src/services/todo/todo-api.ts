import { ApiRoutesEnum, Todo } from '@/types';
import { $fetch } from '../instance';

class TodoService {
  public async getAll(): Promise<Todo[]> {
    return $fetch.get<Todo[]>(ApiRoutesEnum.TODO);
  }
}

export const todoService = new TodoService();
