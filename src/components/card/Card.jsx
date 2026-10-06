import "./Card.css";

function Card({ producto }) {
  return (
    <article className="card-item">
      {/* Etiqueta de imagen que usa la ruta guardada en el objeto */}
      <img src={producto.imagen} alt={producto.nombre} className="card-img" />

      <h3>{producto.nombre}</h3>

      <p>Precio: ${producto.precio}</p>

      <p>Color: {producto.caracteristicas.color}</p>

      <p>Origen: {producto.caracteristicas.origen}</p>

      <p>Peso: {producto.caracteristicas.pesoAprox}</p>

      <p>
        Orgánico: {producto.caracteristicas.organico ? "Sí" : "No"}
      </p>
    </article>
  );
}

export default Card;