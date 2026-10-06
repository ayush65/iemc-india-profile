import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

import { products } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse the IEMC India product catalog — industrial automation, water management and turnkey engineering solutions.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-slate-50 pb-16 pt-16">
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="transition hover:text-accent">
              Home
            </Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span className="text-slate-900">Products</span>
          </nav>

          <SectionHeading
            tag="Catalog"
            title="Product Catalog"
            subtitle="State-of-the-art machines and industrial assembly solutions from IEMC India."
          />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.slug}
                className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-56 overflow-hidden bg-slate-100">
                  <Image
                    src={product.image}
                    alt={product.imageAlt ?? product.title}
                    width={900}
                    height={560}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-2 text-xs font-bold uppercase tracking-[0.05em] text-accent">
                    {product.category}
                  </span>
                  <h2 className="mb-3 text-xl text-primary">{product.title}</h2>
                  <p className="mb-5 text-sm leading-relaxed text-slate-500">
                    {product.desc}
                  </p>

                  <Link
                    href={`/products/${product.slug}`}
                    className="btn btn-primary mt-auto self-start"
                  >
                    View details
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
