"use client";

import { useEffect } from "react";
import { RotateCcw } from "lucide-react";

/** Root error boundary for unexpected render/runtime failures. */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="grid min-h-[60vh] place-items-center bg-slate-50 px-6 py-24 text-center">
      <div>
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.1em] text-red-500">
          Something went wrong
        </p>
        <h1 className="mb-4 text-4xl text-primary">Unexpected error</h1>
        <p className="mx-auto mb-8 max-w-md text-slate-500">
          An error occurred while rendering this page.
          {error.digest ? ` Reference: ${error.digest}` : ""}
        </p>
        <button type="button" onClick={reset} className="btn btn-primary">
          <RotateCcw size={16} aria-hidden="true" />
          Try again
        </button>
      </div>
    </section>
  );
}
