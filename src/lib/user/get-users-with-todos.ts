import { Todo, User } from '@/types';

export const getUsersWithTodos = (users: User[] | undefined, todosList: Todo[] | undefined) => {
  if (!users || !todosList) {
    return;
  }

  return users.map((user) => {
    const todos = todosList.filter((todo) => todo.userId === user.id);
    return {
      ...user,
      todos,
    };
  });
};
