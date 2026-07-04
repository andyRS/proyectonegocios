import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { business, navItems } from '../data/business.js';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/20 bg-empanada-brown/85 text-white shadow-lg backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Navegación principal">
        <a href="#inicio" className="font-display text-2xl tracking-wide text-empanada-gold md:text-3xl">
          {business.name}
        </a>
        <button
          type="button"
          className="rounded-full border border-white/30 p-2 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Abrir o cerrar menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a className="text-sm font-bold uppercase tracking-[0.18em] transition hover:text-empanada-gold" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <div className="border-t border-white/20 bg-empanada-brown px-5 py-4 md:hidden">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="block rounded-xl px-3 py-2 font-semibold hover:bg-white/10" href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
