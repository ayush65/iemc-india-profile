import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center bg-slate-50 px-6 py-24 text-center">
      <div>
        <span className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-xl bg-accent/10 text-accent">
          <SearchX size={30} aria-hidden="true" />
        </span>
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.1em] text-accent">
          Error 404
        </p>
        <h1 className="mb-4 text-4xl text-primary">Page not found</h1>
        <p className="mx-auto mb-8 max-w-md text-slate-500">
          The page you are looking for doesn&apos;t exist or has been moved. Head back to
          the IEMC India home page.
        </p>
        <Link href="/" className="btn btn-primary">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to home
        </Link>
      </div>
    </section>
  );
}
