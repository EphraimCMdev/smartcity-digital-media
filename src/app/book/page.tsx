"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BookRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect standalone /book route back to homepage modal overlay
    router.replace("/");
  }, [router]);

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-white flex items-center justify-center">
      <p className="text-sm font-mono text-[#9CA3AF]">Opening Book Your Ad Modal...</p>
    </div>
  );
}
