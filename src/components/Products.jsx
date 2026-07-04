import { CheckCircle2 } from 'lucide-react';
import { business, products } from '../data/business.js';

export function Products() {
  return (
    <section id="empanadas" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.25em] text-empanada-amber">Nuestro menú</p>
          <h2 className="mt-3 font-display text-5xl text-empanada-brown md:text-7xl">Empanadas irresistibles</h2>
          <p className="mt-5 text-lg leading-8 text-empanada-brown/75">
            Las mejores empanadas de yuca con un toque único de ajo, preparadas por docenas para compartir.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="group overflow-hidden rounded-[2rem] bg-white shadow-warm transition hover:-translate-y-2">
              <div className="relative h-72 overflow-hidden">
                <img src={product.image} alt={`Empanada de yuca rellena de ${product.name.toLowerCase()}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                <span className="absolute left-5 top-5 rounded-full bg-empanada-salsa px-4 py-2 text-sm font-bold text-white">{product.badge}</span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-4xl text-empanada-brown">{product.name}</h3>
                <p className="mt-3 leading-7 text-empanada-brown/70">{product.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 rounded-[2rem] bg-empanada-brown p-8 text-white shadow-warm md:flex md:items-center md:justify-between">
          <div>
            <p className="font-display text-4xl">Docenas desde {business.price}</p>
            <p className="mt-2 text-white/75">Pregunta por disponibilidad y combinaciones de sabores.</p>
          </div>
          <div className="mt-6 flex items-center gap-3 text-empanada-gold md:mt-0">
            <CheckCircle2 /> Pedido rápido por WhatsApp
          </div>
        </div>
      </div>
    </section>
  );
}
