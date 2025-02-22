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
        userId: 10,
        id: 192,
        title: 'ut quas possimus exercitationem sint voluptates',
        completed: false,
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
