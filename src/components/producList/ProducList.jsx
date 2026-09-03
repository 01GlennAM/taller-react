import { useState } from "react";
import Card from '../card/Card';
import productos  from "../../data/productos";
import "./ProducList.css";


function ProductList() {
  const [listaProductos, setListaProductos] = useState(productos);

  return (
    <section>
      <h2>Productos</h2>

      <p>Total de productos: {listaProductos.length}</p>

      <div className="filter-container"> 
        <button className="filter-btn" onClick={() => setListaProductos(productos)}>
          Mostrar todos
        </button>

        <button className="filter-btn"
          onClick={() => {
            const productosOrganicos = productos.filter(
              (producto) => producto.caracteristicas.organico
            );

            setListaProductos(productosOrganicos);
          }}
        >
          Mostrar orgánicos
        </button>
      </div>

      <div className="grid-container">
        {listaProductos.map((producto) => (
          <Card
            key={producto.id}
            producto={producto}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;