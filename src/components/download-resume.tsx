"use client";

import { Download } from "lucide-react";

export default function DownloadResume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Curriculo_Rafael_Carvalho.md";
    link.download = "Curriculo_Rafael_Carvalho.md";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="px-8 py-3 bg-primary-container text-on-primary-container font-bold rounded-xl flex items-center gap-2 hover:brightness-110 transition-all"
    >
      <Download className="size-5" />
      Baixar Currículo
    </button>
  );
}
