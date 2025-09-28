// src/components/Hero.tsx
// Smooth scroll-linked animations with interpolation + no layout overflow on mobile.
// - Smooths using lerp on RAF (low-pass filtering).
// - Uses translate3d + scale for GPU acceleration.
// - Adds overflow-x-hidden to container to avoid mobile right-gap.
// - Keeps image optimizations (picture, srcset, sizes, width/height, loading="eager", fetchPriority).
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import LeafAnimation from './LeafAnimation';

const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export default function Hero(): JSX.Element {
  const sectionRef = useRef<HTMLElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const centerRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  // keep current applied values for smoothing
  const curScale = useRef(1);
  const curSideX = useRef(0);

  // Image base URLs
  const baseCenter = 'https://images.unsplash.com/photo-1543505298-b8be9b52a21a';
  const baseLeft = 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620';
  const baseRight = 'https://images.unsplash.com/photo-1663354616800-5005222996b8';

  const centerWidth = 1200;
  const centerHeight = 700;
  const sideWidth = 800;
  const sideHeight = 700;

  const lqipSvg = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><rect width='10' height='6' fill='%23f3f4f6'/></svg>`;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // remove CSS transitions that can fight RAF-driven transforms
    const cleanupTransitions = () => {
      [leftRef.current, centerRef.current, rightRef.current].forEach((el) => {
        if (el) {
          el.style.transition = 'none';
          el.style.willChange = 'transform';
        }
      });
    };
    cleanupTransitions();

    let ticking = false;

    const updateTransforms = () => {
      ticking = false;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      // progress 0 -> 1 (start start -> end start)
      const raw = (-rect.top) / rect.height;
      const progress = clamp(raw, 0, 1);
      const eased = easeOutCubic(progress);

      // targets
      const targetScale = lerp(1, 1.12, eased); // scale target (reduced slightly for mobile)
      const targetSideX = lerp(0, 72, eased);

      // smooth toward targets (alpha small => smoother)
      const alpha = 0.12; // lower -> smoother/slower, higher -> snappier
      curScale.current = lerp(curScale.current, targetScale, alpha);
      curSideX.current = lerp(curSideX.current, targetSideX, alpha);

      const s = curScale.current;
      const x = curSideX.current;

      // apply transforms as translate3d + scale for GPU acceleration.
      if (centerRef.current) {
        centerRef.current.style.transform = `translate3d(0,0,0) scale(${s})`;
      }
      if (leftRef.current) {
        leftRef.current.style.transform = `translate3d(${-x}px,0,0)`;
      }
      if (rightRef.current) {
        rightRef.current.style.transform = `translate3d(${x}px,0,0)`;
      }
    };

    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      rafRef.current = requestAnimationFrame(updateTransforms);
    };

    // initial frame (ensures transformed positions are correct right away)
    updateTransforms();

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);

    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      // restore will-change if you'd like (left as-is)
    };
  }, []);

  return (
    // overflow-x-hidden prevents mobile right-gap caused by scaled/translated children
    <section ref={sectionRef} className="relative pt-20 pb-32 bg-white overflow-x-hidden">
      {/* ===== Hero Text ===== */}
      <div className="max-w-2xl mx-auto text-center px-4">
        <p className="uppercase text-sm tracking-widest text-gray-400 mb-2">HORIZON IELTS</p>
        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
          Unlock Your Global Future
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-8">
          Personalized coaching and AI-powered tools to guarantee your IELTS success.
        </p>
        <Link
          to="/book"
          className="bg-teal-500 border-2 border-teal-500 text-white hover:bg-teal-600 hover:border-teal-600 px-8 py-3 rounded-lg font-medium transition-all duration-300"
        >
          IELTS for Test Takers
        </Link>
      </div>

      {/* ===== Panels ===== */}
      <div className="mt-16 px-4 max-w-6xl mx-auto flex justify-center items-start space-x-6">
        {/* Left */}
        <div
          ref={leftRef}
          className="flex-none w-[25%] h-[45vh] sm:h-[55vh] overflow-hidden rounded-3xl shadow-md"
          style={{ transform: 'translate3d(0,0,0)' }}
        >
          <picture>
            <source
              type="image/avif"
              srcSet={`
                ${baseLeft}?w=480&auto=format&fit=crop&q=60&fm=avif 480w,
                ${baseLeft}?w=800&auto=format&fit=crop&q=60&fm=avif 800w
              `}
              sizes="(max-width: 768px) 40vw, 25vw"
            />
            <source
              type="image/webp"
              srcSet={`
                ${baseLeft}?w=480&auto=format&fit=crop&q=60&fm=webp 480w,
                ${baseLeft}?w=800&auto=format&fit=crop&q=60&fm=webp 800w
              `}
              sizes="(max-width: 768px) 40vw, 25vw"
            />
            <img
              src={`${baseLeft}?w=800&auto=format&fit=crop&q=60&fm=webp`}
              alt="Successful IELTS student 1"
              className="w-full h-full object-cover block"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width={sideWidth}
              height={sideHeight}
              srcSet={`
                ${baseLeft}?w=480&auto=format&fit=crop&q=60&fm=webp 480w,
                ${baseLeft}?w=800&auto=format&fit=crop&q=60&fm=webp 800w
              `}
              sizes="(max-width: 768px) 40vw, 25vw"
            />
          </picture>
        </div>

        {/* Center */}
        <div
          ref={centerRef}
          className="flex-none w-[60%] sm:w-[60%] h-[45vh] sm:h-[55vh] overflow-hidden rounded-3xl shadow-lg relative"
          style={{
            transform: 'scale(1)',
            transformOrigin: 'center center',
            backgroundImage: `url("${lqipSvg}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <picture>
            <source
              type="image/avif"
              srcSet={`
                ${baseCenter}?w=480&auto=format&fit=crop&q=60&fm=avif 480w,
                ${baseCenter}?w=800&auto=format&fit=crop&q=60&fm=avif 800w,
                ${baseCenter}?w=1200&auto=format&fit=crop&q=60&fm=avif 1200w
              `}
              sizes="(max-width: 768px) 90vw, 50vw"
            />
            <source
              type="image/webp"
              srcSet={`
                ${baseCenter}?w=480&auto=format&fit=crop&q=60&fm=webp 480w,
                ${baseCenter}?w=800&auto=format&fit=crop&q=60&fm=webp 800w,
                ${baseCenter}?w=1200&auto=format&fit=crop&q=60&fm=webp 1200w
              `}
              sizes="(max-width: 768px) 90vw, 50vw"
            />
            <img
              src={`${baseCenter}?w=${centerWidth}&auto=format&fit=crop&q=60&fm=webp`}
              alt="Modern classroom for IELTS preparation"
              className="w-full h-full object-cover block"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width={centerWidth}
              height={centerHeight}
              srcSet={`
                ${baseCenter}?w=480&auto=format&fit=crop&q=60&fm=webp 480w,
                ${baseCenter}?w=800&auto=format&fit=crop&q=60&fm=webp 800w,
                ${baseCenter}?w=1200&auto=format&fit=crop&q=60&fm=webp 1200w
              `}
              sizes="(max-width: 768px) 90vw, 50vw"
            />
          </picture>
        </div>

        {/* Right */}
        <div
          ref={rightRef}
          className="flex-none w-[25%] h-[45vh] sm:h-[55vh] overflow-hidden rounded-3xl shadow-md"
          style={{ transform: 'translate3d(0,0,0)' }}
        >
          <picture>
            <source
              type="image/avif"
              srcSet={`
                ${baseRight}?w=480&auto=format&fit=crop&q=60&fm=avif 480w,
                ${baseRight}?w=800&auto=format&fit=crop&q=60&fm=avif 800w
              `}
              sizes="(max-width: 768px) 40vw, 25vw"
            />
            <source
              type="image/webp"
              srcSet={`
                ${baseRight}?w=480&auto=format&fit=crop&q=60&fm=webp 480w,
                ${baseRight}?w=800&auto=format&fit=crop&q=60&fm=webp 800w
              `}
              sizes="(max-width: 768px) 40vw, 25vw"
            />
            <img
              src={`${baseRight}?w=800&auto=format&fit=crop&q=60&fm=webp`}
              alt="Student studying for IELTS"
              className="w-full h-full object-cover block"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width={sideWidth}
              height={sideHeight}
              srcSet={`
                ${baseRight}?w=480&auto=format&fit=crop&q=60&fm=webp 480w,
                ${baseRight}?w=800&auto=format&fit=crop&q=60&fm=webp 800w
              `}
              sizes="(max-width: 768px) 40vw, 25vw"
            />
          </picture>
        </div>
      </div>

      {/* Decorative divider */}
      <div className="mt-16">
        <div className="flex items-center">
          <div className="flex-grow border-t border-gray-300" />
          <LeafAnimation />
          <div className="flex-grow border-t border-gray-300" />
        </div>
      </div>
    </section>
  );
}
