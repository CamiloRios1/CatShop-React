import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemList from './components/ItemList/ItemList';
import { gatoProducts } from './asyncMock'; // Importa gatoProducts

function App() {
  return (
    <>
      {/* Header de la web */}
      <Navbar />

      {/* Body de la página */}
      <article className='inicio'>

        {/* Renderiza el componente ItemListContainer */}
        <ItemListContainer saludo={"Hola bienvenidos a los productos de mis gatos"} />

       
        {/* Renderiza el componente ItemCount */}
        <ItemCount initial={1} stock={10} />
      </article>
    </>
  );
}

export default App;
