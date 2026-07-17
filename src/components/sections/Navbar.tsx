"use client";

import { Container } from "@/components/layout/Container";

export function Navbar() {
  return (
    <header className="w-full py-6">
      <Container>
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold">
            AI Vision UI
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#features">
              Features
            </a>

            <a href="#demo">
              Demo
            </a>

            <a href="#pricing">
              Pricing
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}