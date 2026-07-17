import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  className?: string;
};

export function Text({
  children,
  className,
}: TextProps) {
  return (
    <p
      className={cn(
        "text-base leading-relaxed text-muted-foreground",
        "sm:text-lg",
        className
      )}
    >
      {children}
    </p>
  );
}