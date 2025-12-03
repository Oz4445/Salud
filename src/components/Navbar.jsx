import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav">

      <div className="logo">
        Proyecto de Salud – Dengue
      </div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <div className={`links ${open ? "open" : ""}`}>
        <a href="/">Inicio</a>
        <a href="/publico">Para Público</a>
        <a href="/personal-salud">Para Personal de Salud</a>
        <a href="/bibliografia">Bibliografía</a>
      </div>

    </div>
  );
}
