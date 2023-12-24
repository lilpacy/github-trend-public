// 配列を指定したサイズのチャンクに分割する関数
export function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const results = [];
  while (array.length) {
    results.push(array.splice(0, chunkSize));
  }
  return results;
}
