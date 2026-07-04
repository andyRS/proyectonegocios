import { benefits } from '../data/business.js';

export function About() {
  return (
    <section id="sobre-nosotros" className="bg-white px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-empanada-amber">Sobre nosotros</p>
            <h2 className="mt-3 font-display text-5xl text-empanada-brown md:text-7xl">Somos D' Armando Empanadas</h2>
            <p className="mt-6 text-lg leading-8 text-empanada-brown/75">
              Nacimos con una idea sencilla: llevar el toque de ajo a la empanada de yuca y convertirlo en una experiencia memorable. Trabajamos con compromiso, higiene y calidad para ofrecer un servicio cercano y especial.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="rounded-[1.5rem] border border-empanada-gold/20 bg-empanada-cream p-6 shadow-sm">
                <img src={benefit.image} alt={benefit.title} className="h-20 w-20 object-contain" />
                <h3 className="mt-5 font-display text-3xl text-empanada-brown">{benefit.title}</h3>
                <p className="mt-2 leading-7 text-empanada-brown/70">{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
