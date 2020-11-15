export const sortHandler = <T>(items: Array<any>, order: string, key: string): Array<T> => {
  switch (order) {
    case 'ASC':
      return items.sort((a, b) => a[key] - b[key]);
    case 'DESC':
      return items.sort((a, b) => b[key] - a[key]);
    default:
      return items;
  }
};
