import { business, navItems } from '../data/business.js';

export function Footer() {
  return (
    <footer className="bg-empanada-brown px-5 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <p className="font-display text-4xl text-empanada-gold">{business.name}</p>
          <p className="mt-3 max-w-sm text-white/75">Empanadas de yuca con sabor a ajo, preparadas para convertir cualquier momento en una experiencia especial.</p>
        </div>
        <div>
          <h3 className="font-bold uppercase tracking-[0.2em] text-empanada-gold">Menú</h3>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="text-white/75 transition hover:text-white" href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold uppercase tracking-[0.2em] text-empanada-gold">Pedidos</h3>
          <p className="mt-4 text-white/75">Teléfono: {business.phoneDisplay}</p>
          <p className="mt-2 text-white/75">Email: {business.email}</p>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} {business.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
