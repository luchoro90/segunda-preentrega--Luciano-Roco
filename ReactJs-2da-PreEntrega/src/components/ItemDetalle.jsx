import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Detalle.css';
import Tarjeta from './Card';
import fetchProductos from './asyncMock';


function ItemDetalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetchProductos()
      .then((data) => {
        const foundProduct = data.find((product) => product.id === Number(id));
        if (foundProduct) {
          setProducto(foundProduct);
        } else {
          
          setProducto(null);
        }
      })
      .catch((error) => {
        console.error('Error al cargar los datos:', error);
      });
  }, [id]);

  if (!producto) {
    return <p> Cargando Producto</p>;
  }

  return (
    <div className="Card-detalle">
      <Tarjeta 
        img={producto.img}
        title={producto.title}
        precio={producto.precio}
      />
      <div className="Card-detalle-descripcion">
        <h2>Descripción</h2>
      
      {producto.text}
      </div>
    </div>
  );
}

export default ItemDetalle;
