import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Productos from './vistas/productos/Productos';




function App () {
  return ( 
    <>
    <Navbar />

     <Productos />

      <main>
        <h2>Taller React</h2>
        <p>Taller de productos en react</p>
      </main>

    <Footer / >
    
    </>
  
  )
  
}

export default App