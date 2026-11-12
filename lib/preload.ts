/**
 * 写真の先読み。ニュースの写真は Google ドライブから毎回 0.5〜1 秒かけて読み込まれるため、
 * 次に開きそうな記事（前後の記事・マウスを乗せた記事）の写真を先に読み込んでおき、
 * 切り替えた瞬間に写真が出るようにします。
 */
const loaded = new Map<string, HTMLImageElement>();

export function preloadImage(src?: string) {
  if (!src || typeof window === 'undefined' || loaded.has(src)) return;
  const img = new Image();
  img.decoding = 'async';
  img.src = src;
  loaded.set(src, img);
}
