export function translate(text: string): string {
  // から文字だと自動でdetectしてくれる
  return LanguageApp.translate(text, '', 'ja');
}
