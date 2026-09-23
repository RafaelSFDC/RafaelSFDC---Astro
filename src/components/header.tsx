"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const homeMenuItems = [
  { name: "Produtos", href: "#projetos" },
  { name: "Trabalhos", href: "#trabalhos" },
  { name: "Habilidades", href: "#habilidades" },
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
    if (menuState) return;
    const currentScroll = window.pageYOffset;
    setIsScrolled(currentScroll > 50);
    if (currentScroll > lastScroll.current && currentScroll > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    lastScroll.current = currentScroll;
  }, [menuState]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock body scroll, handle Escape key and window resize when mobile menu is open
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuState(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuState(false);
      }
    };

    if (menuState) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuState]);

  const handleNavClick = () => {
    setMenuState(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md transition-transform duration-300",
        !menuState && "border-b border-white/10",
        hidden && !menuState && "-translate-y-full"
      )}
    >
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-20">
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

        {/* Hamburger / Close Button with smooth icon rotation and scale */}
        <button
          type="button"
          onClick={() => setMenuState((prev) => !prev)}
          aria-label={menuState ? "Fechar Menu" : "Abrir Menu"}
          aria-expanded={menuState}
          className="relative z-50 block cursor-pointer p-2 md:hidden text-on-surface hover:text-surface-tint transition-colors focus:outline-none"
        >
          <div className="relative size-6">
            <span
              className={cn(
                "absolute inset-0 flex items-center justify-center transition-all duration-300 transform",
                menuState
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-90 scale-50 pointer-events-none"
              )}
            >
              <X className="size-6" />
            </span>
            <span
              className={cn(
                "absolute inset-0 flex items-center justify-center transition-all duration-300 transform",
                !menuState
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 rotate-90 scale-50 pointer-events-none"
              )}
            >
              <Menu className="size-6" />
            </span>
          </div>
        </button>
      </div>

      {/* Backdrop overlay */}
      <div
        onClick={() => setMenuState(false)}
        className={cn(
          "fixed inset-0 top-20 bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-300 -z-10",
          menuState
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        aria-hidden="true"
      />

      {/* Animated Mobile Menu Dropdown */}
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out md:hidden overflow-hidden bg-surface/95 backdrop-blur-xl border-white/10",
          menuState
            ? "grid-rows-[1fr] max-h-[500px] opacity-100 border-b shadow-2xl"
            : "grid-rows-[0fr] max-h-0 opacity-0 border-b-0 pointer-events-none"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-margin-mobile py-6">
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li
                  key={item.name}
                  className={cn(
                    "transition-all duration-300 transform",
                    menuState
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  )}
                  style={{
                    transitionDelay: menuState ? `${index * 40}ms` : "0ms",
                  }}
                >
                  <a
                    href={item.href}
                    className="block py-2 text-on-surface-variant font-medium hover:text-surface-tint active:text-surface-tint hover:translate-x-1.5 transition-all font-label-sm text-label-sm uppercase tracking-widest"
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroHeader;
