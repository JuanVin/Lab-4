import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Test from './Test'


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
let test = [
  {
			"id":"1",
			"instrumento": "Mandolina Instrumento Musical Stagg Sunburst",
			"marca": "Stagg",
			"modelo": "M20",
			"imagen": "nro10.jpg",
			"precio": "2450",
			"costoEnvio": "G",
			"cantidadVendida": "28",
			"descripcion": "Estas viendo una excelente mandolina de la marca Stagg, con un sonido muy dulce, tapa aros y fondo de tilo, y diapasón de palisandro. Es un instrumento acústico (no se enchufa) de cuerdas dobles (4 pares) con la caja ovalada y cóncava, y el mástil corto. Su utilización abarca variados ámbitos, desde rock, folk, country y ensambles experimentales."
		},
		{
			"id":"2",
			"instrumento": "Pandereta Pandero Instrumento Musical ",
			"marca": "DyM ventas",
			"modelo": "32 sonajas",
			"imagen": "nro9.jpg",
			"precio": "325",
			"costoEnvio": "150",
			"cantidadVendida": "10",
			"descripcion": "1 Pandereta - 32 sonajas metálicas. Más de 8 años vendiendo con 100 % de calificaciones POSITIVAS y clientes satisfechos !! "
		},
]
const App = () => (
  <Router>
      <Routes>
        <Route path="/" element={<Test test= {test} />} />
        <Route path="/about" element={<Test text="about"/>} />
        <Route path="/asd" element={<Test text="aasdasdadds"/>} />
      </Routes>
  </Router>
);

export default App;
