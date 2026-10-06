import { NextResponse } from "next/server";

import { getProduct, products } from "@/lib/data";

/** GET /api/products — full catalog. */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (slug) {
    const product = getProduct(slug);
    if (!product) {
      return NextResponse.json(
        { ok: false, error: `No product found for slug "${slug}".` },
        { status: 404 }
      );
    }
    return NextResponse.json({ ok: true, data: product });
  }

  return NextResponse.json({ ok: true, count: products.length, data: products });
}
