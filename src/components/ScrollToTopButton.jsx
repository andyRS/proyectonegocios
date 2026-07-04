import { ArrowUp } from 'lucide-react';

export function ScrollToTopButton() {
  return (
    <a href="#inicio" aria-label="Subir al inicio" className="fixed bottom-24 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-empanada-brown shadow-lg transition hover:-translate-y-1 hover:bg-empanada-gold">
      <ArrowUp size={22} />
    </a>
  );
}
