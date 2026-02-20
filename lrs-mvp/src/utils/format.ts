export const ellipsis = (value: string, length = 20) => {
  if (value.length <= length) return value;
  return `${value.slice(0, length)}...`;
};
