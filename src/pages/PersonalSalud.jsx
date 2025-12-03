export default function PersonalSalud() {
  return (
    <div className="container card">
      <h1>Dengue – Información para Personal de Salud</h1>

      <p>
        El dengue es causado por cuatro serotipos del virus DENV (1-4). La transmisión ocurre a través
        del mosquito <i>Aedes aegypti</i>. La infección puede ser asintomática, febril no complicada,
        dengue con signos de alarma o dengue grave.
      </p>

      <h2>Signos de alarma</h2>
      <ul>
        <li>Dolor abdominal intenso</li>
        <li>Vómitos persistentes</li>
        <li>Sangrado de mucosas</li>
        <li>Hepatomegalia</li>
        <li>Incremento del hematocrito con disminución de plaquetas</li>
      </ul>

      <h2>Tratamiento</h2>
      <p>
        No existe tratamiento antiviral específico. El manejo debe basarse en hidratación guiada por metas 
        y vigilancia estricta, siguiendo las guías vigentes de la OMS y la Secretaría de Salud.
      </p>

      <h2>Referencias</h2>
      <ul>
        <li>NOM-032-SSA2-2010</li>
        <li>OMS – Guía para el manejo del dengue 2022</li>
      </ul>
    </div>
  );
}
