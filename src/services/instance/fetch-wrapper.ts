class FetchClient {
  private API_URL = import.meta.env.VITE_API_URL as string;

  constructor(private defaultHeaders: Record<string, string> = {}) {}

  async get<T>(
    path: string,
    isAuth: boolean = false,
    headers?: Record<string, string>,
  ): Promise<T> {
    return this.fetch<T>(path, 'GET', isAuth, undefined, headers);
  }

  async post<T>(
    path: string,
    body?: unknown,
    isAuth: boolean = false,
    headers?: Record<string, string>,
  ): Promise<T> {
    return this.fetch<T>(path, 'POST', isAuth, body, headers);
  }

  async put<T>(
    path: string,
    body?: unknown,
    isAuth: boolean = false,
    headers?: Record<string, string>,
  ): Promise<T> {
    return this.fetch<T>(path, 'PUT', isAuth, body, headers);
  }

  async delete<T>(
    path: string,
    isAuth: boolean = false,
    headers?: Record<string, string>,
  ): Promise<T> {
    return this.fetch<T>(path, 'DELETE', isAuth, undefined, headers);
  }

  async patch<T>(
    path: string,
    body?: unknown,
    isAuth: boolean = false,
    headers?: Record<string, string>,
  ): Promise<T> {
    return this.fetch<T>(path, 'PATCH', isAuth, body, headers);
  }

  private async fetch<T>(
    path: string,
    method: string,
    isAuth: boolean,
    body?: unknown,
    headers?: Record<string, string>,
  ): Promise<T> {
    const url = `${this.API_URL}${path}`;

    const isFormData = body instanceof FormData;

    const response = await fetch(url, {
      method,
      headers: {
        ...(!isFormData && { 'Content-Type': 'application/json' }),
        ...this.defaultHeaders,
        ...headers,
      },
      body: isFormData ? (body as FormData) : body ? JSON.stringify(body) : null,
    });

    const data = await response.json();

    if (!response.ok) {
      console.log(data, isAuth);
      throw new Error(data);
    }

    return data;
  }
}

export const $fetch = new FetchClient();
