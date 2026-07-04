import { ArrowRight, ShoppingBag } from 'lucide-react';
import { business } from '../data/business.js';

const message = encodeURIComponent('Hola, quiero ordenar empanadas de yuca con sabor a ajo.');

export function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-screen items-center overflow-hidden bg-empanada-brown px-5 pt-24 text-white">
      <img src="/Imagenes/EmpanadaHeader.jpg" alt="Empanadas de yuca doradas" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-empanada-brown via-empanada-brown/80 to-empanada-brown/25" />
      <div className="mx-auto grid max-w-7xl gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] text-empanada-gold backdrop-blur">
            {business.tagline}
          </p>
          <h1 className="font-display text-6xl leading-none tracking-wide md:text-8xl">
            Empanadas de yuca con sabor a <span className="text-empanada-gold">ajo</span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-white/90">
            Crujientes, sabrosas y hechas para compartir. Pide tus docenas de queso, res o pollo por WhatsApp.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href={`https://api.whatsapp.com/send?phone=${business.whatsappPhone}&text=${message}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full bg-empanada-gold px-7 py-4 font-bold text-empanada-brown shadow-warm transition hover:-translate-y-1 hover:bg-white">
              <ShoppingBag size={20} /> Ordenar ahora
            </a>
            <a href="#empanadas" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white hover:text-empanada-brown">
              Ver sabores <ArrowRight size={20} />
            </a>
          </div>
        </div>
        <aside className="rounded-[2rem] border border-white/20 bg-white/15 p-6 shadow-warm backdrop-blur">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-empanada-gold">Precio por docena</p>
          <p className="mt-3 font-display text-6xl text-white">{business.price}</p>
          <p className="mt-4 text-white/85">Sabores disponibles: queso, res y pollo. Ideales para reuniones, meriendas y eventos.</p>
        </aside>
      </div>
    </section>
  );
}
