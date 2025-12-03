import { useEffect } from "react";
import Formulario from "../components/Formulario";

export default function Home() {

  // ====== Lightbox para ampliar imágenes ======
  useEffect(() => {
    const lightbox = document.getElementById("lightbox");
    const images = document.querySelectorAll(".img");

    images.forEach(img => {
      img.addEventListener("click", () => {
        lightbox.querySelector("img").src = img.src;
        lightbox.classList.add("open");
      });
    });

    lightbox.addEventListener("click", () => {
      lightbox.classList.remove("open");
    });
  }, []);

  return (
    <div className="container">

      <h1>Dengue – Proyecto de Informática Médica</h1>

      <p><strong>Autor:</strong></p>

      <h2>¿Qué es el Dengue?</h2>
      <p>
        El dengue es una enfermedad viral transmitida por el mosquito <i>Aedes aegypti</i>.
        Puede causar fiebre alta, dolor intenso, malestar general y, en casos severos,
        complicaciones que requieren atención médica inmediata.
      </p>

      <h2>Infografía</h2>
      <img src="/infografia-dengue.jpeg" className="img" alt="Infografía Dengue" />

      <h2>Mapa Mental</h2>
      <img src="/mapa-dengue.jpeg" className="img" alt="Mapa mental Dengue" />

      <h2>Video explicativo</h2>
      <div className="video-wrapper">
        <iframe
           src="https://www.youtube.com/embed/m_01Dl8oKKQ"
          title="Video Dengue"
          allowFullScreen
        ></iframe>
      </div>

      <h2>Formulario de contacto</h2>
      <Formulario />

      {/* LIGHTBOX PARA VER IMÁGENES EN GRANDE */}
      <div id="lightbox" className="lightbox">
        <img src="" alt="zoom" />
      </div>

    </div>
  );
}
