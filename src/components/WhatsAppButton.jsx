import { MessageCircle } from 'lucide-react';
import { business } from '../data/business.js';

export function WhatsAppButton() {
  const message = encodeURIComponent('Hola, quiero ordenar empanadas de yuca con sabor a ajo.');
  return (
    <a href={`https://api.whatsapp.com/send?phone=${business.whatsappPhone}&text=${message}`} target="_blank" rel="noreferrer" aria-label="Ordenar por WhatsApp" className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-warm transition hover:-translate-y-1 hover:bg-green-600">
      <MessageCircle size={28} />
    </a>
  );
}
