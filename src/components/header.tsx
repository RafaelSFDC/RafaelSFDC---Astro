"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const homeMenuItems = [
  { name: "SaaS", href: "#projetos" },
  { name: "Trabalhos", href: "#trabalhos" },
  { name: "Skills", href: "#habilidades" },
  { name: "Sobre", href: "#sobre" },
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "#contato" },
];

const blogMenuItems = [
  { name: "Home", href: "/" },
  { name: "Projetos", href: "/#projetos" },
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "/#contato" },
];

interface HeroHeaderProps {
  navigationMode?: "home" | "blog";
}

const HeroHeader = ({ navigationMode = "home" }: HeroHeaderProps) => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const lastScroll = React.useRef(0);
  const menuItems = navigationMode === "blog" ? blogMenuItems : homeMenuItems;

  const handleScroll = React.useCallback(() => {
    const currentScroll = window.pageYOffset;
    setIsScrolled(currentScroll > 50);
    if (currentScroll > lastScroll.current && currentScroll > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    lastScroll.current = currentScroll;
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = () => {
    setMenuState(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-white/10 h-20 transition-transform duration-300",
        hidden && "-translate-y-full"
      )}
    >
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-full">
        <a
          href={navigationMode === "blog" ? "/" : "#"}
          className="flex items-center gap-3"
          aria-label="Rafael SFDC - Início"
        >
          <img src="/logo.svg" alt="Rafael SFDC" className="h-9 w-auto" />
          <span className="font-headline-md text-headline-md font-bold text-surface-tint tracking-tighter">
            RAFAEL.
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-stack-lg">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-on-surface-variant font-medium hover:text-surface-tint transition-colors font-label-sm text-label-sm uppercase tracking-widest"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMenuState(!menuState)}
          aria-label={menuState ? "Close Menu" : "Open Menu"}
          className="relative z-20 block cursor-pointer p-2 md:hidden"
        >
          {menuState ? (
            <X className="size-6 text-on-surface" />
          ) : (
            <Menu className="size-6 text-on-surface" />
          )}
        </button>
      </div>

      {menuState && (
        <div className="md:hidden bg-surface border-b border-white/10 px-margin-mobile py-6">
          <ul className="space-y-5">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block text-on-surface-variant font-medium hover:text-surface-tint transition-colors font-label-sm text-label-sm uppercase tracking-widest"
                  onClick={handleNavClick}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default HeroHeader;

