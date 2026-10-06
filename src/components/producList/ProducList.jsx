import { useState } from "react";
import Card from '../card/Card';
import productos  from "../../data/productos";
import "./ProducList.css";


function ProductList() {
  const [listaProductos, setListaProductos] = useState(productos);

  return (
    <section>
      <div className="filter-container"> 
        <button className="filter-btn" onClick={() => setListaProductos(productos)}>
          Mostrar todos
        </button>
{/* 
        filtramos los productos organicos buscandolo en productos y los metemos en setLista...  */}
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

        <button className="filter-btn"
          onClick={() => {
            const productosNacional = productos.filter(
              (producto) => producto.caracteristicas.origen ==="nacional"
            );

            setListaProductos(productosNacional);
          }}
        >
          Mostrar Nacional
        </button>

          <button className="filter-btn"
          onClick={() => {
            const productosImportado = productos.filter(
              (producto) => producto.caracteristicas.origen === "importado"
            );

            setListaProductos(productosImportado);
          }}
        >
          Mostrar Importado
        </button>
      </div>

      {/* muestro la cantidad de productos */}
      <p>Total de productos: {listaProductos.length}</p>


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