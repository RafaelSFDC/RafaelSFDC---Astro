"use client";

/**
 * Utilitários para gerenciar cookie de newsletter
 */

const NEWSLETTER_COOKIE_NAME = "newsletter_subscribed";
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 ano em segundos

/**
 * Define o cookie de newsletter após inscrição bem-sucedida
 */
export function setNewsletterCookie(): void {
  if (typeof document === "undefined") return;

  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);

  document.cookie = `${NEWSLETTER_COOKIE_NAME}=true; expires=${expires.toUTCString()}; path=/; SameSite=Lax; Secure`;
}

/**
 * Verifica se o usuário tem o cookie de newsletter
 * @returns true se o cookie existe, false caso contrário
 */
export function hasNewsletterCookie(): boolean {
  if (typeof document === "undefined") return false;

  return document.cookie
    .split("; ")
    .some((cookie) => cookie.startsWith(`${NEWSLETTER_COOKIE_NAME}=true`));
}

/**
 * Remove o cookie de newsletter (útil para testes/admin)
 */
export function removeNewsletterCookie(): void {
  if (typeof document === "undefined") return;

  document.cookie = `${NEWSLETTER_COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

/**
 * Hook React para verificar status do cookie
 */
export function useNewsletterStatus() {
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  React.useEffect(() => {
    setIsSubscribed(hasNewsletterCookie());
  }, []);

  return { isSubscribed, setIsSubscribed };
}

import React from "react";
