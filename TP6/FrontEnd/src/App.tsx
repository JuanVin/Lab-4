
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListaInstrumento from './components/ListaInstrumento'
import DetalleInstrumento from './components/DetalleInstrumento';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.css'

const App = () => (
  
  <Router>
      <Routes>
        <Route path="/" element={<ListaInstrumento />} />
        <Route path="DetalleInstrumento/:id" element={<DetalleInstrumento />} />
      </Routes>
  </Router>
);

export default App;
