import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Usuarios from './pages/Usuarios';
import Gastos from './pages/Gastos';
import Receitas from './pages/Receitas';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/usuarios" element={<Usuarios />} />

        <Route path="/gastos" element={<Gastos />} />

        <Route path="/receitas" element={<Receitas />} />

        <Route path="*" element={<Error />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;