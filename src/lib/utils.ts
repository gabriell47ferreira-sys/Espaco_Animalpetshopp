/**
 * Utilitários — Espaço Animal
 * Implementação sem dependências extras (sem clsx / tailwind-merge).
 */

/** Combina classes CSS de forma segura */
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ").trim();
}

/** Gera link tel: */
export function telLink(phoneRaw: string): string {
  return `tel:+${phoneRaw}`;
}
