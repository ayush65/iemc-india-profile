"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import type { Product } from "@/lib/types";
import { products } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductModal } from "@/components/ProductModal";
import { Reveal } from "@/components/Reveal";

const AUTOPLAY_MS = 6000;

/**
 * Product carousel with autoplay (paused on hover/focus), dot indicators,
 * keyboard-friendly controls and a details dialog per product.
 */
export function ProductCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useState<Product | null>(null);

  const count = products.length;
  const multi = count > 1;

  const goTo = (next: number) => setIndex(((next % count) + count) % count);

  useEffect(() => {
    if (paused || !multi) return;
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % count),
      AUTOPLAY_MS
    );
    return () => window.clearInterval(timer);
  }, [paused, multi, count]);

  return (
    <section id="products" className="section scroll-mt-24 bg-slate-50">
      <div className="container-page">
        <SectionHeading
          tag="Catalog"
          title="Featured Products"
          subtitle="Explore our state-of-the-art machines and industrial assembly solutions."
        />

        <Reveal>
          <div
            className="relative overflow-hidden rounded-[20px] border border-slate-200 bg-white p-6 shadow-xl sm:p-10"
            role="region"
            aria-roledescription="carousel"
            aria-label="Featured products"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            {/* ---------------------------------------------------- controls */}
            <div className="mb-8 flex items-center justify-end gap-4">
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                disabled={!multi}
                aria-label="Previous Slide"
                className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-primary transition-all duration-300 hover:scale-110 hover:border-accent hover:bg-accent hover:text-white active:scale-95 disabled:pointer-events-none disabled:opacity-40"
              >
                <ChevronLeft size={18} aria-hidden="true" />
              </button>

              <div className="flex items-center gap-2" role="tablist" aria-label="Slides">
                {products.map((product, dotIndex) => (
                  <button
                    key={product.slug}
                    type="button"
                    role="tab"
                    aria-selected={dotIndex === index}
                    aria-label={`Go to slide ${dotIndex + 1}`}
                    onClick={() => goTo(dotIndex)}
                    className={`h-2.5 rounded-full transition-all duration-300 hover:scale-125 ${
                      dotIndex === index ? "w-7 bg-accent" : "w-2.5 bg-slate-200"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => goTo(index + 1)}
                disabled={!multi}
                aria-label="Next Slide"
                className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-primary transition-all duration-300 hover:scale-110 hover:border-accent hover:bg-accent hover:text-white active:scale-95 disabled:pointer-events-none disabled:opacity-40"
              >
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </div>

            {/* ------------------------------------------------------ slides */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
              {products.map((product) => (
                <article
                  key={product.slug}
                  className="grid min-w-full items-center gap-8 lg:grid-cols-2 lg:gap-12"
                  aria-roledescription="slide"
                >
                  <div className="group h-64 overflow-hidden rounded-xl sm:h-[380px]">
                    <Image
                      src={product.image}
                      alt={product.imageAlt ?? product.title}
                      width={900}
                      height={380}
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div>
                    <span className="mb-2 inline-block text-xs font-bold uppercase tracking-[0.05em] text-accent">
                      {product.category}
                    </span>
                    <h3 className="mb-4 text-2xl text-primary sm:text-[2rem]">
                      {product.title}
                    </h3>
                    <p className="mb-6 text-slate-500">{product.desc}</p>

                    <div className="mb-8 grid gap-4 sm:grid-cols-2">
                      {product.specs.map((spec) => (
                        <div
                          key={spec.label}
                          className="rounded-md border-l-[3px] border-accent bg-slate-50 px-4 py-3"
                        >
                          <span className="block text-xs text-slate-500">{spec.label}</span>
                          <span className="font-bold text-slate-900">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setActive(product)}
                      className="btn btn-primary transition-transform duration-300 hover:scale-[1.03] active:scale-95"
                    >
                      View Product
                      <ExternalLink size={16} aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} y={16}>
          <div className="mt-8 text-center">
            <Link href="/products" className="btn btn-outline">
              Browse full product catalog
              <ChevronRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>

      {active ? <ProductModal product={active} onClose={() => setActive(null)} /> : null}
    </section>
  );
}
