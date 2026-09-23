import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const homeHref = "/";

  return (
    <footer className="w-full py-section-gap bg-background border-t border-white/5">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-stack-lg">
        <a href={homeHref} className="flex items-center gap-3" aria-label="Rafael SFDC - Início">
          <img src="/logo.svg" alt="Rafael SFDC" className="h-8 w-auto" />
          <span className="font-headline-md text-headline-md font-bold text-surface-tint tracking-tighter">
            RAFAEL.
          </span>
        </a>
        <div className="flex gap-8">
          <a
            href="https://github.com/RafaelSFDC"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-surface-tint transition-colors font-label-sm text-label-sm uppercase tracking-widest"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/rafael-silva-ferreira-de-carvalho"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-surface-tint transition-colors font-label-sm text-label-sm uppercase tracking-widest"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="mailto:rafaelsfcarvalho@outlook.com"
            className="text-on-surface-variant hover:text-surface-tint transition-colors font-label-sm text-label-sm uppercase tracking-widest"
          >
            Email
          </a>
        </div>
        <p className="font-label-sm text-label-sm text-on-surface-variant">
          © 2026 Rafael SFDC.
        </p>
      </div>
    </footer>
  );
}

