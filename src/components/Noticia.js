import React from 'react';
import PropTypes from 'prop-types';

const Noticia = ({noticia}) => {
    
    //Extraer los valores de Noticia
    const {urlToImage, url, title, description, source} = noticia;

    const imagen = (urlToImage) ?
        <div className="card-image">
            <img src={urlToImage} alt={title} />
            <span className="card-title">{source.name}</span>
        </div>
    : null;

    return ( 
        <div className="col s12 m6 center-align">
            <div className="card">
                {imagen}
                <div className="card-stacked">
                    <div className="card-content">
                        <h5>{title}</h5>
                        <p>{description}</p>
                    </div>
                    <div className="card-action">
                        <a 
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="waves-effect waves-light btn"
                        ><i className="material-icons right">search</i>VER NOTICIA COMPLETA</a>
                    </div>
                </div> 
            </div>    
        </div>
     );
}

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}
 
export default Noticia;
