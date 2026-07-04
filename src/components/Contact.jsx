import { Mail, MapPin, Phone } from 'lucide-react';
import { business } from '../data/business.js';

export function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      'Hola, quiero ordenar empanadas de yuca.',
      `Nombre: ${data.get('name')}`,
      `Teléfono: ${data.get('phone_contact')}`,
      `Email: ${data.get('email') || 'No indicado'}`,
      `Ciudad: ${data.get('city')}`,
      `Mensaje: ${data.get('message') || 'Sin mensaje adicional'}`,
    ].join('\n');

    window.open(`https://api.whatsapp.com/send?phone=${business.whatsappPhone}&text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contacto" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.25em] text-empanada-amber">Contáctanos</p>
          <h2 className="mt-3 font-display text-5xl text-empanada-brown md:text-7xl">Haz tu pedido hoy</h2>
          <p className="mt-5 text-lg leading-8 text-empanada-brown/75">Completa tus datos o escríbenos directamente por WhatsApp para coordinar tu docena.</p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <a href={`tel:${business.phoneDisplay.replaceAll(' ', '')}`} className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-warm">
              <Phone className="text-empanada-salsa" /> <span className="font-bold">{business.phoneDisplay}</span>
            </a>
            <a href={`mailto:${business.email}`} className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-warm">
              <Mail className="text-empanada-salsa" /> <span className="font-bold">{business.email}</span>
            </a>
            <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
              <MapPin className="text-empanada-salsa" /> <span className="font-bold">{business.location}</span>
            </div>
            <iframe title="Ubicación de D' Armando Empanadas" src={business.mapSrc} className="h-80 w-full rounded-[1.5rem] border-0 shadow-warm" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <form className="rounded-[2rem] bg-white p-6 shadow-warm md:p-8" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block font-bold">Nombre
                <input className="mt-2 w-full rounded-xl border border-empanada-gold/30 px-4 py-3 outline-none focus:border-empanada-amber" name="name" placeholder="Tu nombre" required />
              </label>
              <label className="block font-bold">Teléfono
                <input className="mt-2 w-full rounded-xl border border-empanada-gold/30 px-4 py-3 outline-none focus:border-empanada-amber" name="phone_contact" placeholder="+1 809 000 0000" required />
              </label>
              <label className="block font-bold">Email
                <input className="mt-2 w-full rounded-xl border border-empanada-gold/30 px-4 py-3 outline-none focus:border-empanada-amber" type="email" name="email" placeholder="correo@ejemplo.com" />
              </label>
              <label className="block font-bold">Ciudad
                <input className="mt-2 w-full rounded-xl border border-empanada-gold/30 px-4 py-3 outline-none focus:border-empanada-amber" name="city" placeholder="Santo Domingo" required />
              </label>
            </div>
            <label className="mt-5 block font-bold">Mensaje
              <textarea className="mt-2 min-h-36 w-full rounded-xl border border-empanada-gold/30 px-4 py-3 outline-none focus:border-empanada-amber" name="message" placeholder="Cuéntanos qué sabores deseas." />
            </label>
            <button type="submit" className="mt-6 w-full rounded-full bg-empanada-salsa px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-empanada-brown">
              Enviar por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
