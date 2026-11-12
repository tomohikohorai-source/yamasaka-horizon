/**
 * ページごとのタイトル・説明文・共有画像（ブラウザのタブ名、Google の検索結果、SNS・LINE で共有した時の表示）。
 *  - サイト表示中は App.tsx の PageMetaSync がタブ名などを切り替えます。
 *  - ビルド時は vite.config.ts がこの内容でページごとの HTML を作ります
 *    （SNS は JavaScript を動かさないため、記事ごとの HTML がないと記事のタイトルや写真が出ません）。
 * ニュースやサービスは siteContent.ts から自動で作られるので、記事を追加してもここを触る必要はありません。
 */
import { siteContent } from '../siteContent';

export const SITE_URL = 'https://www.yamasakahorizon.com';
const SITE_NAME = '株式会社ヤマサカホライズン';
const HOME_TITLE = `${SITE_NAME} | ファンの熱狂を価値に変える、ファン中心のマーケティング企業。`;
const HOME_DESCRIPTION =
  'その『熱狂』を、価値に変える。ファンとビジネスの架け橋となり、ファンの暮らしをもっと楽しく、もっと自由に。';
const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=1200';

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  image: string;
  type: 'website' | 'article';
}

const summarize = (text: string, max = 110) => {
  const t = text.replace(/\s+/g, ' ').trim();
  return t.length > max ? `${t.slice(0, max)}…` : t;
};

const make = (path: string, name: string, description: string, image = DEFAULT_IMAGE, type: PageMeta['type'] = 'website'): PageMeta => ({
  path,
  title: `${name} | ${SITE_NAME}`,
  description,
  image,
  type,
});

/** 固定ページ：[タブ名, 説明文] */
const STATIC_PAGES: Record<string, [string, string]> = {
  '/news': ['ニュース一覧', `${SITE_NAME}のお知らせ・イベント登壇などの最新情報です。`],
  '/services': ['事業内容', `スポーツ・エンタメDXへの挑戦。${siteContent.services.map((s) => s.jpTitle).join('・')}を行っています。`],
  '/portfolio': ['実績紹介', `これまでの主な実績。${siteContent.portfolio.map((p) => p.jpTitle).join('、')}。`],
  '/about': ['私たちについて', summarize(`${siteContent.about.quote}${siteContent.about.description1}`)],
  '/contact': ['お問い合わせ', `プロジェクトのご相談はこちらから。${SITE_NAME}へのお問い合わせフォームです。`],
  '/sitemap': ['サイトマップ', `${SITE_NAME}のサイト構成・主要ページ一覧です。`],
  '/privacy-policy': ['プライバシーポリシー', `${SITE_NAME}のプライバシーポリシーです。`],
  '/terms-of-service': ['サイト利用条件', `${SITE_NAME}のサイト利用条件です。`],
  '/cookie-policy': ['クッキーポリシー', `${SITE_NAME}のクッキーポリシーです。`],
  '/specified-commercial-transactions': ['特定商取引法に基づく表記', `${SITE_NAME}の特定商取引法に基づく表記です。`],
};

const home = (): PageMeta => ({ path: '/', title: HOME_TITLE, description: HOME_DESCRIPTION, image: DEFAULT_IMAGE, type: 'website' });

export function getPageMeta(pathname: string): PageMeta {
  const path = decodeURIComponent(pathname).replace(/\/+$/, '') || '/';
  if (path === '/') return home();

  const newsId = path.match(/^\/news\/([^/]+)$/)?.[1];
  if (newsId) {
    const n = siteContent.news.find((x) => x.id === newsId);
    if (n) return make(path, n.title, summarize(n.content), n.image, 'article');
  }

  const serviceId = path.match(/^\/services\/([^/]+)$/)?.[1];
  if (serviceId) {
    const s = siteContent.services.find((x) => x.id === serviceId || x.title === serviceId);
    if (s) return make(`/services/${s.id}`, s.jpTitle, s.description, s.image);
  }

  const page = STATIC_PAGES[path];
  if (page) return make(path, page[0], page[1]);

  return { ...home(), path };
}

/** ビルド時に HTML を作るページの一覧（トップ以外） */
export function prerenderPaths(): string[] {
  return [
    ...Object.keys(STATIC_PAGES),
    ...siteContent.services.map((s) => `/services/${s.id}`),
    ...siteContent.news.map((n) => `/news/${n.id}`),
  ];
}

/** 表示中のページに合わせて <head> の内容を書き換える（ブラウザ上で使用） */
export function applyPageMeta(meta: PageMeta) {
  if (typeof document === 'undefined') return;
  const url = `${SITE_URL}${meta.path === '/' ? '/' : meta.path}`;
  document.title = meta.title;
  const set = (selector: string, attr: string, value: string) => {
    document.head.querySelector(selector)?.setAttribute(attr, value);
  };
  set('meta[name="description"]', 'content', meta.description);
  set('link[rel="canonical"]', 'href', url);
  set('meta[property="og:type"]', 'content', meta.type);
  set('meta[property="og:url"]', 'content', url);
  set('meta[property="og:title"]', 'content', meta.title);
  set('meta[property="og:description"]', 'content', meta.description);
  set('meta[property="og:image"]', 'content', meta.image);
  set('meta[name="twitter:url"]', 'content', url);
  set('meta[name="twitter:title"]', 'content', meta.title);
  set('meta[name="twitter:description"]', 'content', meta.description);
  set('meta[name="twitter:image"]', 'content', meta.image);
}
