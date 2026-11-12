import React, { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../lib/motion';

/**
 * ヒーロー背景の「つながる点と線」（CONNECTING PASSION）。
 * 青とピンクの点がゆっくり漂い、近くの点どうし・マウスとの間に線が結ばれます。
 * 画面外にある時・タブが裏にある時は止まり、「視差効果を減らす」設定では静止画として1回だけ描きます。
 */
export const HeroNetwork: React.FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const host = canvas?.parentElement;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !host || !ctx) return;

    const BLUE = '37, 99, 235';
    const PINK = '236, 72, 153';
    const LINK = 130; // 線を結ぶ距離(px)
    const reduce = prefersReducedMotion();

    type P = { x: number; y: number; vx: number; vy: number; r: number; c: string };
    let pts: P[] = [];
    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const rect = host.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(72, Math.max(22, (w * h) / 17000)));
      pts = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
        r: 1.2 + Math.random() * 1.8,
        c: i % 3 === 0 ? PINK : BLUE,
      }));
      if (reduce) draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(${BLUE}, ${(1 - d / LINK) * 0.28})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (md < LINK * 1.4) {
          ctx.strokeStyle = `rgba(${PINK}, ${(1 - md / (LINK * 1.4)) * 0.45})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
      for (const p of pts) {
        ctx.fillStyle = `rgba(${p.c}, 0.75)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const step = () => {
      raf = 0;
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = w + 10;
        else if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        else if (p.y > h + 10) p.y = -10;
      }
      draw();
      loop();
    };

    const loop = () => {
      if (reduce || raf || !visible || document.hidden) return;
      raf = requestAnimationFrame(step);
    };
    const stop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    const onMove = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = mouse.y = -9999;
    };
    const onVis = () => (document.hidden ? stop() : loop());

    resize();
    const ro = new ResizeObserver(() => resize());
    ro.observe(host);
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) loop();
      else stop();
    });
    io.observe(host);
    host.addEventListener('pointermove', onMove, { passive: true });
    host.addEventListener('pointerleave', onLeave);
    document.addEventListener('visibilitychange', onVis);
    loop();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      host.removeEventListener('pointermove', onMove);
      host.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  return <canvas ref={ref} className="yh-network" aria-hidden="true" />;
};
