/**
 * サイト全体の「動き」の仕組み（約2KB）。index.tsx から一度だけ呼び出します。
 *
 * 使い方（各部品の HTML に属性を付けるだけ）:
 *   data-reveal            … 画面に入ったら下からふわっと現れる
 *   data-reveal="fade"     … フェードのみ
 *   data-reveal="left" / "right" / "zoom" / "bar" / "mask"（写真が下から開く）
 *   data-active            … 画面に入っている間だけ is-active が付く（ループする動きの一時停止用）
 *   data-spotlight         … マウスの位置にほんのり光が当たる
 * 同時に画面に入った要素は、上・左から順に少しずつ遅れて現れます。
 */

const reduceMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const prefersReducedMotion = reduceMotion;

export function initMotion() {
  if (typeof window === 'undefined' || (window as any).__yhMotion) return;
  (window as any).__yhMotion = true;

  const root = document.documentElement;
  const canAnimate = !reduceMotion() && 'IntersectionObserver' in window;
  if (canAnimate) root.classList.add('yh-motion');

  // ---- スクロールで現れる ----
  const watched = new Map<Element, HTMLElement[]>();
  const revealIO = canAnimate
    ? new IntersectionObserver(
        (entries) => {
          const shown = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left);
          shown.forEach((e, i) => {
            revealIO!.unobserve(e.target);
            const els = watched.get(e.target) || [e.target as HTMLElement];
            watched.delete(e.target);
            els.forEach((el) => {
              const extra = Number(el.dataset.revealDelay || 0);
              el.style.setProperty('--yh-d', `${Math.min(i, 6) * 90 + extra}ms`);
              el.classList.add('is-in');
            });
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
      )
    : null;

  // ---- 画面内にある間だけループする動きを動かす ----
  const activeIO = canAnimate
    ? new IntersectionObserver((entries) => {
        entries.forEach((e) => e.target.classList.toggle('is-active', e.isIntersecting));
      })
    : null;

  const scan = (node: ParentNode) => {
    node.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)').forEach((el) => {
      if (!revealIO) return el.classList.add('is-in');
      // clip-path で隠している要素（mask）は自分自身の交差を検知できないので、親で判定する
      const target = el.dataset.reveal === 'mask' && el.parentElement ? el.parentElement : el;
      const list = watched.get(target) || [];
      if (!list.includes(el)) list.push(el);
      watched.set(target, list);
      revealIO.observe(target);
    });
    if (activeIO) node.querySelectorAll('[data-active]').forEach((el) => activeIO.observe(el));
  };

  // ページ切り替えなどで新しく描かれた要素も自動で対象にする
  const mo = new MutationObserver((records) => {
    for (const r of records) {
      r.addedNodes.forEach((n) => {
        if (n.nodeType !== 1) return;
        const el = n as HTMLElement;
        if (el.matches('[data-reveal], [data-active]')) scan(el.parentElement || el);
        else scan(el);
      });
    }
  });
  const start = () => {
    scan(document);
    mo.observe(document.body, { childList: true, subtree: true });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();

  // ---- カードのスポットライト ----
  document.addEventListener(
    'pointermove',
    (e) => {
      const card = (e.target as Element | null)?.closest?.('[data-spotlight]') as HTMLElement | null;
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    },
    { passive: true },
  );

  // ---- 画面上部のスクロール量バー（CSS だけで動かないブラウザ向けの代替） ----
  if (canAnimate && !(window.CSS && CSS.supports('animation-timeline: scroll()'))) {
    let ticking = false;
    const update = () => {
      ticking = false;
      const bar = document.querySelector<HTMLElement>('.yh-progress');
      if (!bar) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.scale = `${max > 0 ? Math.min(1, window.scrollY / max) : 0} 1`;
    };
    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      },
      { passive: true },
    );
    window.addEventListener('resize', update, { passive: true });
  }
}
