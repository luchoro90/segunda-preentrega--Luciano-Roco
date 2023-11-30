import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx'
import Productos from './pages/Productos.jsx';
import Detalle from './pages/Detalle.jsx';

function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/ItemlistContainer' element={<Productos />} />
        <Route path="/producto/:id" element={<Detalle />} />

      </Routes>
    </BrowserRouter>

  );
}
export default App;
