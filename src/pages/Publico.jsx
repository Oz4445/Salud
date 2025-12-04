export default function Publico() {
  return (
    <div className="container card" style={{ padding: "20px", marginTop: "20px" }}>
      <h1>Dengue — Información para el Público en General</h1>

      {/* Imagen principal */}
      <img
        src="/imagenes/dengue1.jpeg"
        alt="Información sobre el dengue"
        style={{
          width: "90%",
          maxWidth: "600px",
          display: "block",
          margin: "20px auto",
          borderRadius: "10px"
        }}
      />

      <h2>¿Qué es el dengue?</h2>
      <p>
        El dengue es una enfermedad causada por un virus que se transmite a través de la picadura
        del mosquito <b>Aedes aegypti</b>. No se contagia directamente de una persona a otra.
      </p>

      <h2>¿Cómo se transmite?</h2>
      <p>
        El mosquito pica a una persona enferma y luego pica a alguien sano, transmitiendo el virus.
        Se reproduce en <b>agua limpia y estancada</b> como en botes, cubetas, floreros, llantas y canaletas.
      </p>

      {/* Imagen 2 */}
      <img
        src="/imagenes/dengue2.jpeg"
        alt="Transmisión del dengue"
        style={{
          width: "90%",
          maxWidth: "600px",
          display: "block",
          margin: "20px auto",
          borderRadius: "10px"
        }}
      />

      <h2>Síntomas del dengue</h2>
      <ul>
        <li>Fiebre alta (mayor de 38.5 °C)</li>
        <li>Dolor de cabeza intenso (detrás de los ojos)</li>
        <li>Dolores musculares y articulares</li>
        <li>Cansancio extremo</li>
        <li>Náuseas o vómito</li>
        <li>Manchitas rojas en la piel</li>
        <li>Dolor abdominal</li>
      </ul>

      <h2 style={{ color: "red" }}>Señales de alarma</h2>
      <p>Acude de inmediato al hospital si presentas:</p>
      <ul style={{ color: "red" }}>
        <li>Dolor abdominal fuerte y continuo</li>
        <li>Vómitos persistentes</li>
        <li>Sangrado de encías, nariz o aparición de moretones</li>
        <li>Dificultad para respirar</li>
        <li>Somnolencia o irritabilidad</li>
        <li>Mareos o desmayos</li>
      </ul>

      {/* Imagen 3 */}
      <img
        src="/imagenes/dengue3.jpg"
        alt="Infografía del dengue"
        style={{
          width: "90%",
          maxWidth: "600px",
          display: "block",
          margin: "20px auto",
          borderRadius: "10px"
        }}
      />

      <h2>¿Cómo se diagnostica?</h2>
      <p>
        El diagnóstico se realiza mediante estudios de sangre, especialmente durante los primeros días de fiebre.
      </p>

      <h2>¿Cómo se trata?</h2>
      <p>No existe un medicamento específico contra el dengue. El tratamiento es de apoyo:</p>
      <ul>
        <li>Hidratación abundante</li>
        <li>Paracetamol para la fiebre</li>
        <li>Reposo</li>
      </ul>

      <p style={{ color: "red" }}>
        ❗ No usar ibuprofeno, aspirina o naproxeno — pueden aumentar el riesgo de sangrado.
      </p>

      <h2>¿Cómo prevenir el dengue?</h2>
      <ul>
        <li>Eliminar criaderos de mosquitos (lavar, tapar y voltear recipientes)</li>
        <li>Usar repelente</li>
        <li>Colocar mosquiteros</li>
        <li>Mantener patios limpios</li>
        <li>Evitar acumulación de agua en botes, llantas y floreros</li>
      </ul>

      {/* Imagen de prevención */}
      <img
        src="/imagenes/dengue4.jpeg"
        alt="Mapa del dengue"
        style={{
          width: "90%",
          maxWidth: "600px",
          display: "block",
          margin: "20px auto",
          borderRadius: "10px"
        }}
      />
    </div>
  );
}
