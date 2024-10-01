import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const saludos = {
  español: {
    hola: 'Hola ¿Cómo estás?',
    nombre: 'Es un placer conocerte,',
    dia: 'Espero tengas un excelente día'
  },
  ingles: {
    hola: 'Hello, how are you?',
    nombre: 'Nice to meet you,',
    dia: 'I hope you have a great day'
  },

};

function Traduccion (props) {
  const [idioma, setIdioma] = useState('español');
  const saludo = saludos[idioma];

  const handleChange = (event) => {
    setIdioma(event.target.value);
  };

  return (
    <div>
      <select value={idioma} onChange={handleChange}>
        <option value="español">Español</option>
        <option value="ingles">Inglés</option>
      </select>
      <h2>{saludo.hola}</h2>
      <h2>{saludo.nombre} {props.nombre} {props.apellido}</h2>
      <h2>{saludo.dia}</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <Traduccion nombre="Jesica" apellido="Quintero Quintero" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('rot')
);