export default function Formulario() {
  return (
    <form className="form">
      <input type="text" placeholder="Nombre completo" required />
      <input type="email" placeholder="Correo" required />
      <textarea placeholder="Comentarios" required></textarea>
      <button>Enviar</button>
    </form>
  );
}
