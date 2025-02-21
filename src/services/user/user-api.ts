import { ApiRoutesEnum, User } from '@/types';
import { $fetch } from '../instance';

class UserService {
  public async getAll(page: number, perPage: number): Promise<User[]> {
    return $fetch.get<User[]>(`${ApiRoutesEnum.USER}?_page=${page}&limit_=${perPage}`);
  }
}

export const userService = new UserService();
