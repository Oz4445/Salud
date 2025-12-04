import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav">

      <div className="logo">
        Proyecto de Salud – Dengue
      </div>

      {/* HAMBURGUESA ANIMADA */}
      <div
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* LINKS DEL MENÚ */}
      <div className={`links ${open ? "open" : ""}`}>
        <a href="/">Inicio</a>
        <a href="/publico">Para Público</a>
        <a href="/personal-salud">Para Personal de Salud</a>
        <a href="/bibliografia">Bibliografía</a>
      </div>

    </div>
  );
}
