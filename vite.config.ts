import path from 'path';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { siteContent } from './siteContent';
import { SITE_URL, getPageMeta, prerenderPaths } from './lib/pageMeta';

const escapeAttr = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * ページごとの HTML をビルド時に作ります（例：/news/news-020 → news/news-020.html）。
 * 中身はトップと同じで、<head> のタイトル・説明文・共有画像だけをそのページ用に差し替えます。
 * SNS や LINE で記事を共有した時に、記事のタイトルと写真が表示されるようになります。
 * （Vercel の cleanUrls 設定で、.html なしの URL でこのファイルが返ります）
 */
const pageHtml = (): Plugin => ({
  name: 'yh-page-html',
  apply: 'build',
  enforce: 'post',
  generateBundle(_, bundle) {
    const index = bundle['index.html'];
    if (!index || index.type !== 'asset') return this.warn('index.html が見つからないため、ページごとの HTML を作れませんでした');
    const template = String(index.source);
    for (const path of prerenderPaths()) {
      const meta = getPageMeta(path);
      const url = `${SITE_URL}${meta.path}`;
      let html = template.replace(/<title>[^<]*<\/title>/, () => `<title>${escapeAttr(meta.title)}</title>`);
      const values: [string, string][] = [
        ['name="description" content', meta.description],
        ['rel="canonical" href', url],
        ['property="og:type" content', meta.type],
        ['property="og:url" content', url],
        ['property="og:title" content', meta.title],
        ['property="og:description" content', meta.description],
        ['property="og:image" content', meta.image],
        ['name="twitter:url" content', url],
        ['name="twitter:title" content', meta.title],
        ['name="twitter:description" content', meta.description],
        ['name="twitter:image" content', meta.image],
      ];
      for (const [attr, value] of values) {
        const re = new RegExp(`(${attr}=")[^"]*(")`);
        if (!re.test(html)) this.warn(`index.html に ${attr} が見つかりません（${path}）`);
        html = html.replace(re, (_m, a, b) => `${a}${escapeAttr(value)}${b}`);
      }
      this.emitFile({ type: 'asset', fileName: `${path.slice(1)}.html`, source: html });
    }
  },
});

/**
 * ビルド時に sitemap.xml を自動生成します（公開後は /sitemap.xml で配信されます）。
 * siteContent.ts にニュースやサービスを追加すれば、サイトマップにも自動で反映されます。
 */
const sitemap = (): Plugin => ({
  name: 'yh-sitemap',
  apply: 'build',
  generateBundle() {
    const today = new Date().toISOString().slice(0, 10);
    const toISO = (d: string) => d.replace(/\./g, '-');
    const newsDates = siteContent.news.map((n) => toISO(n.date)).sort();
    const latestNews = newsDates[newsDates.length - 1] || today;
    const urls: { loc: string; lastmod?: string; priority: string }[] = [
      { loc: '/', lastmod: today, priority: '1.0' },
      { loc: '/news', lastmod: latestNews, priority: '0.8' },
      { loc: '/services', lastmod: today, priority: '0.8' },
      ...siteContent.services.map((s) => ({ loc: `/services/${s.id}`, lastmod: today, priority: '0.7' })),
      { loc: '/portfolio', lastmod: today, priority: '0.7' },
      { loc: '/about', lastmod: today, priority: '0.7' },
      { loc: '/contact', priority: '0.6' },
      ...siteContent.news.map((n) => ({ loc: `/news/${n.id}`, lastmod: toISO(n.date), priority: '0.6' })),
      ...['/privacy-policy', '/terms-of-service', '/cookie-policy', '/specified-commercial-transactions', '/sitemap'].map(
        (loc) => ({ loc, priority: '0.3' }),
      ),
    ];
    const body = urls
      .map(
        (u) =>
          `  <url>\n    <loc>${SITE_URL}${u.loc}</loc>\n${u.lastmod ? `    <lastmod>${u.lastmod}</lastmod>\n` : ''}    <priority>${u.priority}</priority>\n  </url>`,
      )
      .join('\n');
    this.emitFile({
      type: 'asset',
      fileName: 'sitemap.xml',
      source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
    });
  },
});

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), sitemap(), pageHtml()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
