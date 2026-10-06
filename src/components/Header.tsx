"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";
import { ChevronRight, Factory, Menu, X } from "lucide-react";

import { company, navLinks } from "@/lib/data";

/**
 * Sticky, blurred site header with a responsive frosted-glass mobile sheet.
 * All navigation in the design is in-page anchoring on the home route, so
 * hash links are prefixed with "/" whenever we are on another route.
 */
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  /* Reading-progress bar pinned to the bottom edge of the header. */
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const resolveHref = (href: string) =>
    href.startsWith("#") && pathname !== "/" ? `/${href}` : href;

  /* Sticky shadow after scrolling past the fold. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close on outside interaction and on Escape. */
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container-page flex h-[72px] items-center justify-between">
        <a
          href={pathname === "/" ? "#hero" : "/"}
          className="flex items-center gap-3"
        >
          <motion.span
            whileHover={{ rotate: -8, scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
            className="grid h-[42px] w-[42px] place-items-center rounded-md bg-gradient-to-br from-primary to-accent text-white"
          >
            <Factory size={22} aria-hidden="true" />
          </motion.span>
          <span className="flex flex-col">
            <span className="font-display text-[1.2rem] font-extrabold leading-tight tracking-tight text-primary">
              {`${company.shortName}\u00a0`}
            </span>
            <span className="text-[0.7rem] font-bold tracking-[0.15em] text-accent">
              {company.legalName}
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.cta ? (
              <motion.a
                key={link.href}
                href={resolveHref(link.href)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent"
              >
                {link.label}
              </motion.a>
            ) : (
              <motion.a
                key={link.href}
                href={resolveHref(link.href)}
                whileHover={{ y: -2 }}
                className="nav-link relative text-[0.925rem] font-medium text-slate-700 transition-colors hover:text-accent"
              >
                {link.label}
              </motion.a>
            )
          )}
        </nav>

        {/* Mobile toggle */}
        <motion.button
          type="button"
          onClick={() => setOpen((value) => !value)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle Navigation"
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="grid h-[42px] w-[42px] place-items-center rounded-md border border-slate-200 text-primary transition-colors hover:border-accent hover:bg-slate-100 md:hidden"
        >
          <span key={open ? "close" : "menu"} className="grid place-items-center">
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </span>
        </motion.button>
      </div>

      {/* Mobile drawer */}
      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="fixed inset-x-0 top-[72px] z-40 border-b border-slate-200/80 bg-white/95 px-6 pb-8 pt-5 shadow-[0_20px_30px_-10px_rgba(10,25,49,0.15)] backdrop-blur-md md:hidden"
        >
            <ul className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={resolveHref(link.href)}
                    onClick={() => setOpen(false)}
                    className={
                      link.cta
                        ? "mt-3 flex items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent px-5 py-3.5 text-base font-semibold text-white shadow-[0_4px_14px_rgba(0,102,245,0.25)] active:scale-[0.98]"
                        : "flex items-center justify-between rounded-md px-4 py-3.5 text-base font-semibold text-slate-700 transition hover:bg-accent/5 hover:pl-5 hover:text-accent"
                    }
                  >
                    {link.label}
                    {!link.cta ? (
                      <ChevronRight size={16} aria-hidden="true" className="opacity-50" />
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
      ) : null}

      {/* Reading progress */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="absolute inset-x-0 bottom-[-1px] h-[2px] origin-left bg-accent"
      />
    </header>
  );
}
