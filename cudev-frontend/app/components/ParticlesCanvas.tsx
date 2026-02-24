'use client';

import { useRef, useEffect } from 'react';

export default function ParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = getComputedStyle(document.documentElement);
    const textColor = colors.getPropertyValue('--text-text').trim() || '#9f9fa9';
    const borderColor = colors.getPropertyValue('--border').trim() || '#333333';

    const mouse = { x: 0, y: 0 };
    let animationFrameId: number;

    class Particle {
      radius: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      effect: Effect;

      constructor(effect: Effect) {
        this.effect = effect;
        this.radius = Math.random() * 1.5 + 0.5;
        this.x = Math.random() * effect.width;
        this.y = Math.random() * effect.height;
        this.vx = Math.random() * 1 - 0.5;
        this.vy = Math.random() * 1 - 0.5;
      }

      draw(context: CanvasRenderingContext2D) {
        context.fillStyle = textColor;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x > this.effect.width || this.x < 0) this.vx *= -1;
        if (this.y > this.effect.height || this.y < 0) this.vy *= -1;
      }
    }

    class Effect {
      width: number;
      height: number;
      particles: Particle[] = [];
      numberOfParticles: number;

      constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.numberOfParticles = window.innerWidth < 768 ? 30 : 80;
        this.createParticles();
      }

      createParticles() {
        this.particles = [];
        for (let i = 0; i < this.numberOfParticles; i++) {
          this.particles.push(new Particle(this));
        }
      }

      handleParticles(context: CanvasRenderingContext2D) {
        this.connectParticles(context);
        this.particles.forEach(p => {
          p.draw(context);
          p.update();
        });
      }

      // Линии между частицами
      connectParticles(context: CanvasRenderingContext2D) {
        const maxDistance = 100;
        context.strokeStyle = borderColor;
        for (let i = 0; i < this.particles.length; i++) {
          for (let a = i + 1; a < this.particles.length; a++) {
            const dx = this.particles[i].x - this.particles[a].x;
            const dy = this.particles[i].y - this.particles[a].y;
            const distance = Math.hypot(dx, dy);

            if (distance < maxDistance) {
              context.save();
              context.globalAlpha = 1 - distance / maxDistance;
              context.beginPath();
              context.moveTo(this.particles[i].x, this.particles[i].y);
              context.lineTo(this.particles[a].x, this.particles[a].y);
              context.stroke();
              context.restore();
            }
          }
        }
      }

      // Линии к курсору
      mouseConnect(context: CanvasRenderingContext2D, x: number, y: number) {
        const maxDistance = 180;
        context.strokeStyle = 'red'; 
        for (let i = 0; i < this.particles.length; i++) {
          const dx = this.particles[i].x - x;
          const dy = this.particles[i].y - y;
          const distance = Math.hypot(dx, dy);

          if (distance < maxDistance) {
            context.save();
            context.globalAlpha = (1 - distance / maxDistance) * 0.5;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(this.particles[i].x, this.particles[i].y);
            context.lineTo(x, y);
            context.stroke();
            context.restore();
          }
        }
      }
    }

    const effect = new Effect(canvas.width, canvas.height);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      effect.mouseConnect(ctx, mouse.x, mouse.y);
      effect.handleParticles(ctx);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      effect.width = canvas.width;
      effect.height = canvas.height;
      effect.createParticles();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 z-[-1] bg-background pointer-events-none"
    />
  );
}