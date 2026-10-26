import { useEffect, useRef } from 'react';
import { Application, Graphics } from 'pixi.js';

export function PixiCanvas() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const app = new Application();
    let cancelled = false;
    let initialized = false;

    app
      .init({
        background: '#0b1020',
        resizeTo: host,
        antialias: true,
      })
      .then(() => {
        initialized = true;
        if (cancelled) {
          app.destroy({ removeView: true }, { children: true });
          return;
        }
        host.appendChild(app.canvas);

        const dot = new Graphics().circle(0, 0, 24).fill(0xff5a36);
        dot.position.set(app.screen.width / 2, app.screen.height / 2);
        app.stage.addChild(dot);
      });

    return () => {
      cancelled = true;
      if (initialized) {
        app.destroy({ removeView: true }, { children: true });
      }
    };
  }, []);

  return <div ref={hostRef} className="game-host" />;
}