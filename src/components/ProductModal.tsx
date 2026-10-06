"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Send, X } from "lucide-react";

import type { Product } from "@/lib/types";

type Props = {
  product: Product;
  onClose: () => void;
};

/** Accessible product dialog: focus management, scroll lock, Escape/backdrop close. */
export function ProductModal({ product, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="anim-fade fixed inset-0 z-[2000] grid place-items-center bg-slate-900/75 p-6"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={product.title}
        className="anim-pop relative max-h-[90vh] w-full max-w-[650px] overflow-y-auto rounded-xl bg-white p-9 shadow-xl sm:p-10"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-6 top-6 text-slate-500 transition hover:text-primary"
        >
          <X size={24} aria-hidden="true" />
        </button>

        <span className="mb-3 inline-block rounded-full bg-accent/10 px-3.5 py-1.5 text-[0.8125rem] font-bold uppercase tracking-[0.1em] text-accent-hover">
          {product.category}
        </span>

        <h2 className="mb-4 mt-1 text-[1.75rem] text-primary">{product.title}</h2>

        <Image
          src={product.image}
          alt={product.imageAlt ?? product.title}
          width={900}
          height={280}
          sizes="(max-width: 650px) 100vw, 650px"
          className="mb-6 h-[280px] w-full rounded-lg object-cover"
        />

        <p className="mb-6 text-slate-700">{product.details}</p>

        <h3 className="mb-3 text-lg text-primary">Technical Specifications</h3>
        <dl className="mb-6 rounded-lg border border-slate-200 bg-slate-50 p-5">
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

        <Link href="/#contact" onClick={onClose} className="btn btn-primary btn-block">
          Inquire About This Product
          <Send size={17} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
