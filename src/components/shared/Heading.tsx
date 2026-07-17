import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function Heading({
  children,
  className,
  as = "h2",
}: HeadingProps) {
  const Component = as;

  return (
    <Component
      className={cn(
        "font-bold tracking-tight text-foreground",
        "text-3xl sm:text-4xl lg:text-5xl",
        className
      )}
    >
      {children}
    </Component>
  );
}