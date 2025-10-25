"use client";

import { useEffect } from "react";

export default function ErrorReporter({
  error,
  reset,
}: {
  error?: Error & { digest?: string };
  reset?: () => void;
}) {
  useEffect(() => {
    if (error) {
      console.error("Error:", error);
    }
  }, [error]);

  if (!error) return null;

  return null; // Silent error reporting - logs to console only
}
