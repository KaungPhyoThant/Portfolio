import { useEffect, useRef } from "react";

const COMMANDS = [
  "git checkout -b feature/nest-auth-guards",
  "git commit -m \"feat: create NestJS user guard decorator\"",
  "git commit -m \"feat(laravel): secure POS endpoints with RBAC\"",
  "git commit -m \"style(tailwind): import custom grid utilities\"",
  "git commit -m \"refactor(react): memoize expensive layout rendering\"",
  "git push origin main",
  "git merge feature/laravel-api-cache",
  "git status",
  "pnpm dev",
  "pnpm build",
  "pnpm install",
  "pnpm lint",
  "pnpm test",
  "php artisan migrate",
  "php artisan route:cache",
  "php artisan make:controller Api/POSController",
  "nest start --watch",
  "nest build",
  "nest g controller users",
  "npx tailwindcss -i src/index.css",
  "Tailwind: compiled grid utility classes",
  "React: component hydration completed",
  "Laravel: API routes registered successfully",
  "NestJS: bootstrap completed in 240ms",
  "Vite: build bundle complete",
  "const [state, dispatch] = useReducer()",
  "import { NestModule, MiddlewareConsumer } from '@nestjs/common'",
  "Route::middleware('auth:sanctum')->group(function () {})",
  "pnpm store prune",
  "git checkout main",
  "git pull origin main",
];

const SHORT_COMMANDS = COMMANDS.filter(cmd => cmd.length <= 18);

const PREFIXES = ["➜  ~ ", "➜  portfolio ", "$ ", "▶ ", "[info] ", "[success] ", ""];

const THEME_COLORS = [
  { r: 167, g: 139, b: 250 }, // violet-400
  { r: 244, g: 114, b: 182 }, // fuchsia-400
  { r: 52,  g: 211, b: 153 }, // emerald-400
  { r: 129, g: 140, b: 248 }, // indigo-400
];

const DeveloperBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let streams = [];
    let lastColsCount = 0;

    const initStreams = (w, h) => {
      const isMobile = w < 768;
      
      if (isMobile) {
        // Exactly 2 static columns for mobile to guarantee visual presence and zero overlap/overflow
        streams = [
          // Left Column (any command fits at x = 16)
          {
            x: 16,
            y: Math.random() * h,
            speed: 0.35 + Math.random() * 0.3,
            fontSize: 11,
            color: THEME_COLORS[Math.floor(Math.random() * THEME_COLORS.length)],
            opacity: 0.25 + Math.random() * 0.1,
            text: `${PREFIXES[Math.floor(Math.random() * PREFIXES.length)]}${COMMANDS[Math.floor(Math.random() * COMMANDS.length)]}`,
            charCount: 100,
            typeSpeed: 0.3,
            isShortOnly: false,
          },
          // Right Column (restricted to short commands at x = 200)
          {
            x: 200,
            y: Math.random() * -h - 50,
            speed: 0.4 + Math.random() * 0.3,
            fontSize: 10,
            color: THEME_COLORS[Math.floor(Math.random() * THEME_COLORS.length)],
            opacity: 0.22 + Math.random() * 0.08,
            text: `${PREFIXES[Math.floor(Math.random() * PREFIXES.length)]}${SHORT_COMMANDS[Math.floor(Math.random() * SHORT_COMMANDS.length)]}`,
            charCount: 0,
            typeSpeed: 0.3,
            isShortOnly: true,
          }
        ];
      } else {
        // Desktop columns
        const colWidth = 150;
        const colsCount = Math.ceil(w / colWidth) + 1;

        streams = Array.from({ length: colsCount }, (_, i) => {
          const randomCmd = COMMANDS[Math.floor(Math.random() * COMMANDS.length)];
          const randomPrefix = PREFIXES[Math.floor(Math.random() * PREFIXES.length)];
          const randomColor = THEME_COLORS[Math.floor(Math.random() * THEME_COLORS.length)];
          
          const isOnScreen = Math.random() > 0.3;
          const initialY = isOnScreen 
            ? Math.random() * h 
            : Math.random() * -h - 50;

          return {
            x: i * colWidth + (Math.random() * 30 - 15),
            y: initialY,
            speed: 0.45 + Math.random() * 0.65,
            fontSize: Math.floor(13 + Math.random() * 4),
            color: randomColor,
            opacity: 0.25 + Math.random() * 0.13,
            text: `${randomPrefix}${randomCmd}`,
            charCount: isOnScreen ? 100 : 0, 
            typeSpeed: 0.3 + Math.random() * 0.4,
            isShortOnly: false,
          };
        });
      }
    };

    // Handle high-DPI screens
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      // Re-initialize columns only if layout mode changes (mobile vs desktop transition)
      const isMobile = width < 768;
      const colWidth = isMobile ? 220 : 150;
      const colsCount = Math.ceil(width / colWidth) + 1;

      if (colsCount !== lastColsCount || streams.length === 0) {
        initStreams(width, height);
        lastColsCount = colsCount;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let lastTime = performance.now();
    const fps = 35; // Throttled to 35 fps for efficiency
    const interval = 1000 / fps;
    let drawCount = 0;

    const render = (timestamp) => {
      animationFrameId = requestAnimationFrame(render);
      const now = timestamp || performance.now();

      const elapsed = now - lastTime;
      if (elapsed < interval) return;
      lastTime = now - (elapsed % interval);

      if (drawCount === 0) {
        console.log(`[DeveloperBackground] Active drawing loop started. First frame rendered.`);
      }
      drawCount++;

      // Clear the canvas with transparent pixels
      ctx.clearRect(0, 0, width, height);

      // Set font
      ctx.font = "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";

      streams.forEach((stream) => {
        // Draw the text
        const opacityStr = stream.opacity.toFixed(3);
        ctx.fillStyle = `rgba(${stream.color.r}, ${stream.color.g}, ${stream.color.b}, ${opacityStr})`;
        ctx.font = `${stream.fontSize}px JetBrains Mono, monospace`;

        // Typewriter effect or instant full string drift
        if (stream.charCount < stream.text.length) {
          stream.charCount += stream.typeSpeed;
        }

        const visibleText = stream.text.substring(0, Math.floor(stream.charCount));
        ctx.fillText(visibleText, stream.x, stream.y);

        // Update position
        stream.y += stream.speed;

        // Reset if offscreen
        if (stream.y > height + 50) {
          const isMobile = width < 768;
          const listToUse = (isMobile && stream.isShortOnly) ? SHORT_COMMANDS : COMMANDS;
          const randomCmd = listToUse[Math.floor(Math.random() * listToUse.length)];
          const randomPrefix = PREFIXES[Math.floor(Math.random() * PREFIXES.length)];
          const randomColor = THEME_COLORS[Math.floor(Math.random() * THEME_COLORS.length)];

          stream.y = -40;
          if (isMobile) {
            stream.x = stream.isShortOnly ? 200 : 16;
          } else {
            stream.x = Math.random() * width;
          }
          stream.color = randomColor;
          stream.opacity = isMobile
            ? (stream.isShortOnly ? 0.22 + Math.random() * 0.08 : 0.25 + Math.random() * 0.1)
            : 0.25 + Math.random() * 0.13;
          stream.speed = isMobile
            ? 0.35 + Math.random() * 0.35
            : 0.45 + Math.random() * 0.65;
          stream.fontSize = isMobile
            ? (stream.isShortOnly ? 10 : 11)
            : Math.floor(13 + Math.random() * 4);
          stream.text = `${randomPrefix}${randomCmd}`;
          stream.charCount = 0;
        }
      });
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 select-none"
    />
  );
};

export default DeveloperBackground;
