import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Send } from "lucide-react";

import { getProduct, products, siteUrl } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };

  return {
    title: product.title,
    description: product.desc,
    openGraph: {
      title: product.title,
      description: product.desc,
      images: [{ url: product.image }],
      type: "website",
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.details,
    image: product.image,
    sku: product.id,
    brand: { "@type": "Brand", name: "IEMC India" },
    url: `${siteUrl}/products/${product.slug}`,
  };

  return (
    <section className="bg-slate-50 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="container-page">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="transition hover:text-accent">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/products" className="transition hover:text-accent">
            Products
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-900">{product.category}</span>
        </nav>

        <div className="grid gap-10 overflow-hidden rounded-[20px] border border-slate-200 bg-white p-6 shadow-xl md:grid-cols-2 md:p-12">
          <div className="overflow-hidden rounded-xl">
            <Image
              src={product.image}
              alt={product.imageAlt ?? product.title}
              width={900}
              height={600}
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              className="h-[320px] w-full object-cover md:h-full"
            />
          </div>

          <div>
            <span className="mb-3 inline-block rounded-full bg-accent/10 px-3.5 py-1.5 text-[0.8125rem] font-bold uppercase tracking-[0.1em] text-accent-hover">
              {product.category}
            </span>
            <h1 className="mb-4 text-3xl text-primary md:text-[2.25rem]">{product.title}</h1>
            <p className="mb-6 text-slate-600">{product.desc}</p>
            <p className="mb-8 rounded-lg bg-slate-50 p-5 text-slate-700">
              {product.details}
            </p>

            <h2 className="mb-3 text-xl text-primary">Technical Specifications</h2>
            <dl className="mb-8 rounded-lg border border-slate-200 bg-slate-50 p-5">
              {product.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-center justify-between gap-4 border-b border-slate-200 py-2 text-sm last:border-b-0"
                >
                  <dt className="font-medium text-slate-500">{spec.label}</dt>
                  <dd className="font-bold text-slate-900">{spec.value}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap gap-4">
              <Link href="/#contact" className="btn btn-primary">
                Inquire about this product
                <Send size={16} aria-hidden="true" />
              </Link>
              <Link href="/products" className="btn btn-outline">
                <ArrowLeft size={16} aria-hidden="true" />
                All products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
