import React, { useState } from 'react';

function FiltroCategoria({ categorias, onFiltrar }) {
  const [selectedCategoria, setSelectedCategoria] = useState('');

  const handleChangeCategoria = (e) => {
    setSelectedCategoria(e.target.value);
    onFiltrar(e.target.value);
  };

  return (
    <div>
      <label>Filtrar por categoría: </label>
      <select value={selectedCategoria} onChange={handleChangeCategoria}>
        <option value="">ALL</option>
        {categorias.map((categoria) => (
          <option key={categoria} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FiltroCategoria;
