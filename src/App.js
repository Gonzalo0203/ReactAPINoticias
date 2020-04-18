import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  //State de la categoría y de las noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=f21b96ad2cf341e3b5226fe26fe08fda`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      
      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria]);

    return (
      <Fragment>
        <Header 
          titulo="BUSCADOR DE NOTICIAS"
        />
        <div className="container white">
          <Formulario 
            guardarCategoria={guardarCategoria}
          />
          <ListadoNoticias 
            noticias={noticias}
          />
        </div>
      </Fragment>   
    );
}

export default App;