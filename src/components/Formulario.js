import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({guardarCategoria}) => {

    //Opciones de categorias de noticias
    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnología'},
    ]

    //Uso del custom hook useSelect
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    //Submit al form para pasar categoria a App.js
    const buscarNoticias = e => {
        e.preventDefault();

        guardarCategoria(categoria);
    }

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>
                    <SelectNoticias />
                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`${styles['bnt_block']} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}

Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}
 
export default Formulario;