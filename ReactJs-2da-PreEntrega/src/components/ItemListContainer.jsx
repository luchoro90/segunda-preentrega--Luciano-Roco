import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tarjeta from './Card';
import FiltroCategoria from './FiltroCategoria'; 
import fetchProductos from './asyncMock';
import './itemListContainer.css';

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const categorias = ['ARMARIOS', 'CAJONERAS', 'SILLAS', 'ESCRITORIOS']; 

  useEffect(() => {
    fetchProductos()
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error al cargar los datos:', error);
      });
  }, []);

  // Función para filtrar los productos por categoría
  const filtrarProductosPorCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  // Filtra los productos basados en la categoría seleccionada
  const productosFiltrados = categoriaSeleccionada
    ? products.filter((product) => product.categoria === categoriaSeleccionada)
    : products;

    return (
        <div>
          <h1>PRODUCTOS</h1>
          <FiltroCategoria className= "categoria" categorias={categorias} onFiltrar={filtrarProductosPorCategoria} />
          {isLoading ? (
            <p>Cargando productos...</p>
          ) : (
            <div className="tarjeta">
              {productosFiltrados.map((product) => (
                <div key={product.id} className='tarjeta2'>
                  <Tarjeta
                    img={product.img}
                    title={product.title}
                    precio={product.precio}
                  />
                  <Link className="Link" to={`/producto/${product.id}`}>VER DETALLE</Link>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

export default ItemListContainer;
