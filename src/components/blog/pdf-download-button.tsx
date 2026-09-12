"use client";

import React, { useState, useEffect } from "react";
import { Download, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hasNewsletterCookie } from "@/lib/newsletter-cookie";
import { NewsletterGateModal } from "./newsletter-gate-modal";

interface PDFDownloadButtonProps {
  pdfUrl: string;
  postTitle: string;
  postSlug?: string;
}

export function PDFDownloadButton({
  pdfUrl,
  postTitle,
  postSlug,
}: PDFDownloadButtonProps) {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Verificar cookie no mount
    setIsSubscribed(hasNewsletterCookie());
    setIsChecking(false);
  }, []);

  const handleDownload = () => {
    if (!isSubscribed) {
      setShowModal(true);
      return;
    }

    // Iniciar download
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${postTitle}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubscribeSuccess = () => {
    setIsSubscribed(true);
    // Aguardar um pouco e iniciar download automaticamente
    setTimeout(() => {
      handleDownload();
    }, 500);
  };

  if (isChecking) {
    return null; // Ou um skeleton loader
  }

  return (
    <>
      <div className="my-8 p-6 border rounded-lg bg-linear-to-r from-primary/5 to-primary/10">
        <div className="flex items-start gap-4">
          <div className="shrink-0">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Download className="h-6 w-6 text-primary" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2">
              {isSubscribed
                ? "Baixe o PDF deste artigo"
                : "Conteúdo Premium Disponível"}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {isSubscribed
                ? "Tenha acesso offline a todo o conteúdo deste artigo em formato PDF."
                : "Inscreva-se na nossa newsletter para baixar este artigo em PDF e acessar outros conteúdos exclusivos."}
            </p>
            <Button onClick={handleDownload} size="lg" className="gap-2">
              {isSubscribed ? (
                <>
                  <Download className="h-4 w-4" />
                  Baixar PDF
                </>
              ) : (
                <>
                  <Lock className="h-4 w-4" />
                  Inscrever-se para Baixar
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      <NewsletterGateModal
        open={showModal}
        onOpenChange={setShowModal}
        onSuccess={handleSubscribeSuccess}
        source={postSlug || "blog-pdf-download"}
        contentType="pdf"
      />
    </>
  );
}
