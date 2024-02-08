export interface FetchOptions {
  page?: number;
  limit?: number;
}

export function fetchData<T>(data: T[], options?: FetchOptions) {
  const response: T[] = [];
  const page = options?.page ?? 1;
  const limit = options?.limit ?? 5;
  const totalPage = parseInt(Number(data.length / limit).toFixed(0))

  /* data.length - limit >= 0 */

  for (let index = limit * page; index > -1 ; index--) {
    data[index] && response.push(data[index])
  }

  return {
    data: response,
    totalPage
  };
}
