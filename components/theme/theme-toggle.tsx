"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon-lg"
      aria-label="Toggle theme"
      onClick={() =>
        setTheme((current) => (current === "dark" ? "light" : "dark"))
      }
    >
      {/* Both icons render; CSS picks one off the .dark class. Avoids a
          hydration mismatch and a flash of the wrong icon on first paint. */}
      <Moon className="dark:hidden" />
      <Sun className="hidden dark:block" />
    </Button>
  );
}
