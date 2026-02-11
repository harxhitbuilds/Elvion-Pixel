import { cn } from "@/lib/utils";

export function Container({ children, className }) {
  return <div className={cn("h-full w-full", className)}>{children}</div>;
}
