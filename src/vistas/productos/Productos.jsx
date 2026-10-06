/* import ProducList from "../../components/producList/ProducList";

function Products() {
  return (
    <main>
      <h1>Catálogo de productos</h1>

      <p>
        Explora nuestros productos disponibles.
      </p>

      <ProducList />
    </main>
  );
}

export default Products; */


import ProducList from "../../components/producList/ProducList";
import "./Productos.css";

function Products() {
  return (
    <main>
      <section className="products-header">
        <h1>Catálogo de productos</h1>

        <p>
          Explora nuestros productos disponibles.
        </p>
      </section>

      <ProducList />
    </main>
  );
}

export default Products;
