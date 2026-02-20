export const toKoreanDate = (value: string) => {
  return new Date(value).toLocaleDateString('ko-KR');
};
