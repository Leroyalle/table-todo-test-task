import { ApiRoutesEnum } from '@/types';
import { $fetch } from '../instance';
import { todoService } from './todo-api';

jest.mock('../instance', () => ({
  $fetch: {
    get: jest.fn(),
  },
}));

describe('TodoService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('должен формировать правильный URL и возвращать данные', async () => {
    const mocks = [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496',
          },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets',
        },
      },
    ];

    ($fetch.get as jest.Mock).mockResolvedValue(mocks);

    const result = await todoService.getAll();

    expect($fetch.get).toHaveBeenCalled();
    expect($fetch.get).toHaveBeenCalledTimes(1);
    expect($fetch.get).toHaveBeenCalledWith(ApiRoutesEnum.TODO);
    expect(result).toEqual(mocks);
  });

  it('должен обрабатывать ошибки', async () => {
    const mockError = new Error('Network error');

    ($fetch.get as jest.Mock).mockRejectedValue(mockError);

    await expect(todoService.getAll()).rejects.toThrow('Network error');
    expect($fetch.get).toHaveBeenCalledTimes(1);
    expect($fetch.get).toHaveBeenCalledWith(ApiRoutesEnum.TODO);
  });
});
