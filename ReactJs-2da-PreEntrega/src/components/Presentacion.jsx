import './Presentacion.css';
import { Link } from 'react-router-dom';


const Presentacion = () => {
    return (
        <>
            <div className='banner-container'>
                <h1>OFI Muebles</h1>
                <p>Su tienda online de mobiliario para oficinas</p>
                <Link to= "/ItemlistContainer" >
        <button>TIENDA</button>
      </Link>
            </div>
        </>
    );
}

export default Presentacion;