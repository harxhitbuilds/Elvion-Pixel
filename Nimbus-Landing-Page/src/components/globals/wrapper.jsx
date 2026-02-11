import { cn } from "@/lib/utils";
import React from "react";

export function Wrapper({ children, className }) {
  return (
    <div className={cn("mx-auto h-full w-full max-w-350 px-2", className)}>
      {children}
    </div>
  );
}
