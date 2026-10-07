"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

import type { Product } from "@/lib/types";
import { products } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductModal } from "@/components/ProductModal";
import { Reveal } from "@/components/Reveal";

/**
 * Editorial product showcase — one large featured panel per product with a
 * hover overlay and a details modal. Data-driven from `products`.
 */
export function Products() {
  const [active, setActive] = useState<Product | null>(null);

  return (
    <section id="products" className="section scroll-mt-24 bg-slate-50">
      <div className="container-page">
        <SectionHeading tag="03 · Product Portfolio" title="Products Built to Perform" subtitle="Engineered systems for modern industrial needs." />

        <div className="space-y-12">
          {products.map((product) => (
            <Reveal key={product.slug}>
              <article className="group grid items-center gap-10 overflow-hidden rounded-[20px] border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg md:grid-cols-2 md:p-10">
                {/* Image */}
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src={product.image}
                    alt={product.imageAlt ?? product.title}
                    width={900}
                    height={600}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] md:h-[420px]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-sm">
                    {product.category}
                  </span>
                </div>

                {/* Copy */}
                <div>
                  <h3 className="mb-1 font-display text-3xl font-bold tracking-tight text-primary">
                    {product.id}
                  </h3>
                  <p className="mb-5 text-accent-hover font-semibold">{product.title}</p>
                  <p className="mb-6 leading-relaxed text-slate-600">{product.desc}</p>

                  <dl className="mb-8 grid grid-cols-3 gap-3">
                    {product.specs.map((spec) => (
                      <div key={spec.label} className="border border-slate-200 p-3 text-center">
                        <dt className="text-[0.65rem] font-bold uppercase tracking-widest text-slate-400">
                          {spec.label}
                        </dt>
                        <dd className="mt-1 font-display text-sm font-bold text-primary">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setActive(product)}
                      className="btn btn-primary transition-transform duration-300 hover:scale-[1.03] active:scale-95"
                    >
                      View Details
                      <ArrowRight size={16} aria-hidden="true" />
                    </button>
                    <Link href="/products" className="btn btn-outline">
                      Full Catalog
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {active ? <ProductModal product={active} onClose={() => setActive(null)} /> : null}
    </section>
  );
}
