"use client";

import type React from "react";
import { useRef, useEffect} from "react";
import { gsap } from "gsap";
import Image from "next/image";


export interface ChromaItem {
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  location?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
}

export interface ChromaGridProps {
  items?: ChromaItem[];
  className?: string;
  radius?: number;
  columns?: number;
  rows?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}

type SetterFn = (v: number | string) => void;

export const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  className = "",
  radius = 300,
  columns = 3,
  rows = 2,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const setX = useRef<SetterFn | null>(null);
  const setY = useRef<SetterFn | null>(null);
  const pos = useRef({ x: 0, y: 0 });

  const demo: ChromaItem[] = [
    {
      image: "/members_lecturer/indraaulia.png",
      title: "Prof. Dr. Suyanto, S.T., M.Sce",
      subtitle: "Director of AI Center Telkom University",
      handle: "@alexrivera",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg, #4F46E5, #000)",
      url: "https://github.com/",
    },
    {
      image: "/members_lecturer/indraaulia.png",
      title: "Suryo Adhi Wibowo, S.T., M.T.,Ph.D.",
      subtitle: "Vice Director of AI Center Telkom University",
      handle: "@jordanchen",
      borderColor: "#10B981",
      gradient: "linear-gradient(210deg, #10B981, #000)",
      url: "https://linkedin.com/in/",
    },
    {
      image: "/members_lecturer/indraaulia.png",
      title: "Morgan Blake",
      subtitle: "UI/UX Designer",
      handle: "@morganblake",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg, #F59E0B, #000)",
      url: "https://dribbble.com/",
    },
  ];

  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    setX.current = gsap.quickSetter(el, "--x", "px") as SetterFn;
    setY.current = gsap.quickSetter(el, "--y", "px") as SetterFn;

    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e: React.PointerEvent) => {
    const r = rootRef.current!.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardClick = (url?: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleCardMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const card = e.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={rootRef}
      className={`relative w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto justify-center gap-4 max-w-7xl p-4 box-border ${className}`}
      style={
        {
          "--r": `${radius}px`,
          "--cols": columns,
          "--rows": rows,
        } as React.CSSProperties
      }
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {data.map((c, i) => (
        <article
          key={i}
          className={`
            relative flex flex-col w-full max-w-full h-auto rounded-2xl overflow-hidden 
            border border-slate-700 transition-all duration-300 mt-5
            ${c.url ? "cursor-pointer" : "cursor-default"}
            hover:border-opacity-100
            before:content-[''] before:absolute before:inset-0 before:pointer-events-none 
            before:opacity-0 before:transition-opacity before:duration-500 before:z-10
            hover:before:opacity-100
          `}
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c.url)}
          style={
            {
              "--card-border": c.borderColor || "transparent",
              "--card-gradient": c.gradient,
              background: c.gradient,
              borderColor: c.borderColor,
            } as React.CSSProperties
          }
        >
          {/* Spotlight Effect */}
          <div
            className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500 z-10 hover:opacity-100"
            style={{
              background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.3), transparent 70%)`,
            }}
          />

          {/* Image Wrapper */}
          <div className="relative z-[1] flex-1 p-2.5 box-border bg-transparent transition-colors duration-300">
            <Image
              src={c.image || "/placeholder.svg"}
              alt={c.title}
              width={300}
              height={300}
              loading="lazy"
              className="w-full h-auto object-cover rounded-lg block"
            />
          </div>

          {/* Info Footer */}
          <footer className="relative z-[1] p-3 px-4 text-white font-sans grid grid-cols-[1fr_auto] gap-y-1 gap-x-3">
            <h3 className="font-semibold text-base leading-tight">{c.title}</h3>
            {c.handle && (
              <span className="text-slate-400 text-sm">{c.handle}</span>
            )}
            <p className="text-slate-400 text-sm col-span-2">{c.subtitle}</p>
            {c.location && (
              <span className="text-slate-400 text-sm col-span-2">
                {c.location}
              </span>
            )}
          </footer>
        </article>
      ))}

      {/* Overlay Effect */}
      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none z-30 opacity-100 transition-opacity duration-300"
        style={{
          backdropFilter: "grayscale(1) brightness(0.78)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
          background: "rgba(0, 0, 0, 0.001)",
          maskImage: `radial-gradient(
            circle var(--r) at var(--x) var(--y),
            transparent 0%,
            transparent 15%,
            rgba(0, 0, 0, 0.1) 30%,
            rgba(0, 0, 0, 0.22) 45%,
            rgba(0, 0, 0, 0.35) 60%,
            rgba(0, 0, 0, 0.5) 75%,
            rgba(0, 0, 0, 0.68) 88%,
            white 100%
          )`,
          WebkitMaskImage: `radial-gradient(
            circle var(--r) at var(--x) var(--y),
            transparent 0%,
            transparent 15%,
            rgba(0, 0, 0, 0.1) 30%,
            rgba(0, 0, 0, 0.22) 45%,
            rgba(0, 0, 0, 0.35) 60%,
            rgba(0, 0, 0, 0.5) 75%,
            rgba(0, 0, 0, 0.68) 88%,
            white 100%
          )`,
        }}
      />

      {/* Fade Effect */}
      <div
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          backdropFilter: "grayscale(1) brightness(0.78)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
          background: "rgba(0, 0, 0, 0.001)",
          maskImage: `radial-gradient(
            circle var(--r) at var(--x) var(--y),
            white 0%,
            white 15%,
            rgba(255, 255, 255, 0.9) 30%,
            rgba(255, 255, 255, 0.78) 45%,
            rgba(255, 255, 255, 0.65) 60%,
            rgba(255, 255, 255, 0.5) 75%,
            rgba(255, 255, 255, 0.32) 88%,
            transparent 100%
          )`,
          WebkitMaskImage: `radial-gradient(
            circle var(--r) at var(--x) var(--y),
            white 0%,
            white 15%,
            rgba(255, 255, 255, 0.9) 30%,
            rgba(255, 255, 255, 0.78) 45%,
            rgba(255, 255, 255, 0.65) 60%,
            rgba(255, 255, 255, 0.5) 75%,
            rgba(255, 255, 255, 0.32) 88%,
            transparent 100%
          )`,
        }}
      />
    </div>
  );
};

export default ChromaGrid;
