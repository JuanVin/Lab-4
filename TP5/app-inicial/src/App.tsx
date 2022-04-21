
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import DetalleInstrumento from './components/DetalleInstrumento';
import 'bootstrap/dist/css/bootstrap.css'

const App = () => (
  
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="DetalleInstrumento/:id" element={<DetalleInstrumento />} />
      </Routes>
  </Router>
  
);

export default App;
