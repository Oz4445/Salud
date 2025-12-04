export default function PersonalSalud() {
  const imgStyle = {
    width: "90%",
    maxWidth: "600px",
    display: "block",
    margin: "20px auto",
    borderRadius: "10px"
  };

  return (
    <div className="container card" style={{ padding: "20px", marginTop: "20px" }}>
      <h1>Información sobre Dengue — Personal de Salud</h1>

      {/* Imagen principal */}
      <img 
        src="/imagenes/dengue5.png"
        alt="Información técnica del dengue"
        style={imgStyle}
      />

      {/* Agente etiológico */}
      <h2>🔬 Agente etiológico</h2>
      <p>
        Virus dengue (DENV), familia <b>Flaviviridae</b>, con 4 serotipos: 
        <b> DENV-1, DENV-2, DENV-3 y DENV-4</b>.
        Las infecciones secundarias con un serotipo distinto aumentan el riesgo de dengue grave 
        debido al fenómeno <b>ADE (antibody-dependent enhancement)</b>.
      </p>

      {/* Imagen extra — agente etiológico (opcional) */}
      <img 
        src="/imagenes/dengue6.jpg"
        alt="Virus dengue microscopio"
        style={imgStyle}
      />

      {/* Vector */}
      <h2>🦟 Vector</h2>
      <p>
        <b>Aedes aegypti</b> y <b>Aedes albopictus</b>.  
        La transmisión ocurre por la picadura de la hembra.  
        Actividad diurna, con picos por la mañana y tarde.
      </p>

      {/* Imagen vector */}
      <img 
        src="/imagenes/dengue7.jpg"
        alt="Vector Aedes aegypti"
        style={imgStyle}
      />

      <hr />

      {/* Clasificación OMS */}
      <h2>🧪 Clasificación según la OMS</h2>

      <h3>1. Dengue sin signos de alarma</h3>
      <ul>
        <li>Fiebre aguda 2–7 días</li>
        <li>Cefalea, mialgias, artralgias</li>
        <li>Rash</li>
        <li>Náuseas o vómito</li>
        <li>Leucopenia</li>
      </ul>

      <h3>2. Dengue con signos de alarma</h3>
      <ul>
        <li>Dolor abdominal intenso</li>
        <li>Vómitos persistentes</li>
        <li>Derrame pleural o ascitis</li>
        <li>Letargia o irritabilidad</li>
        <li>Hepatomegalia &gt; 2 cm</li>
        <li>Aumento del hematocrito con descenso de plaquetas</li>
      </ul>

      <h3>3. Dengue grave</h3>
      <ul>
        <li>Shock hipovolémico por fuga plasmática</li>
        <li>Hemorragias graves</li>
        <li>Afectación orgánica severa (hígado, SNC, corazón)</li>
      </ul>

      {/* Imagen clasificación OMS */}
      <img 
        src="/imagenes/dengue8.jpg"
        alt="Clasificación OMS del dengue"
        style={imgStyle}
      />

      <hr />

      {/* Diagnóstico */}
      <h2>🧬 Diagnóstico</h2>

      <h3>Pruebas específicas</h3>
      <ul>
        <li>NS1: útil en los días 1–5 de síntomas</li>
        <li>RT-PCR: diagnóstico temprano y serotipificación</li>
        <li>IgM: después del día 5</li>
        <li>IgG: útil para infecciones secundarias</li>
      </ul>

      <h3>Laboratorio de apoyo</h3>
      <ul>
        <li>Hemoconcentración (↑ hematocrito)</li>
        <li>Trombocitopenia</li>
        <li>Leucopenia</li>
        <li>Transaminasas elevadas</li>
      </ul>

      {/* Imagen diagnóstico */}
      <img 
        src="/imagenes/dengue9.jpg"
        alt="Pruebas diagnósticas del dengue"
        style={imgStyle}
      />

      <hr />

      {/* Tratamiento */}
      <h2>💉 Tratamiento</h2>

      <h3>Dengue sin signos de alarma — Ambulatorio</h3>
      <ul>
        <li>Hidratación oral suficiente</li>
        <li>Paracetamol</li>
        <li>Vigilancia de signos de alarma</li>
        <li>Evitar AINES y ASA</li>
      </ul>

      <h3>Dengue con signos de alarma — Hospitalización</h3>
      <ul>
        <li>Líquidos intravenosos (cristaloides)</li>
        <li>Evaluación continua del hematocrito</li>
        <li>Control estricto de ingresos/egresos</li>
        <li>Monitorización hemodinámica</li>
      </ul>

      <h3>Dengue grave — Cuidados intensivos</h3>
      <ul>
        <li>Manejo del shock por fuga capilar</li>
        <li>Líquidos IV guiados por respuesta</li>
        <li>Vasopresores según necesidad</li>
        <li>Transfusiones si hay hemorragia</li>
        <li>Manejo de falla orgánica</li>
      </ul>

      {/* Imagen tratamiento */}
      <img 
        src="/imagenes/dengue10.jpg"
        alt="Tratamiento y manejo clínico del dengue"
        style={imgStyle}
      />

      <hr />

      {/* Fases clínicas */}
      <h2>🛑 Fases clínicas del dengue</h2>
      <ul>
        <li><b>Fase febril (1–3 días):</b> fiebre, mialgias</li>
        <li><b>Fase crítica (3–7 días):</b> fuga plasmática, riesgo de shock</li>
        <li><b>Fase de recuperación (7–10 días):</b> reabsorción y riesgo de sobrecarga hídrica</li>
      </ul>

      {/* Imagen fases clínicas */}
      <img 
        src="/imagenes/dengue11.jpg"
        alt="Fases clínicas del dengue"
        style={imgStyle}
      />

      <hr />

      {/* Prevención salud pública */}
      <h2>🛡️ Prevención (salud pública)</h2>
      <ul>
        <li>Eliminación de criaderos</li>
        <li>Nebulización espacial en brotes</li>
        <li>Control larvario</li>
        <li>Educación comunitaria</li>
        <li>Vigilancia epidemiológica activa</li>
        <li>Notificación obligatoria</li>
        <li>Vacunación (Qdenga®)</li>
      </ul>

      {/* Imagen final */}
      <img 
        src="/imagenes/dengue12.jpeg"
        alt="Mapa epidemiológico del dengue"
        style={imgStyle}
      />
    </div>
  );
}
