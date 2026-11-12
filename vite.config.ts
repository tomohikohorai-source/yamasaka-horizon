import path from 'path';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { siteContent } from './siteContent';

const SITE_URL = 'https://www.yamasakahorizon.com';

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
      plugins: [react(), sitemap()],
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
