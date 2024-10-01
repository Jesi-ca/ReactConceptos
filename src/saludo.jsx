//componentes ui y funcionales 
import React from 'react';
import ReactDOM from 'react-dom';

function Actividad1(props) {
  return (
    <div>
      <h2>Hola ¿Cómo estás?</h2>
      <h2>{props.nombre} {props.apellido}</h2>
      <h2>Espero tengas un excelente dia </h2>
    </div>
  );
}

function App() {
  return <Actividad1 nombre="Jesica" apellido="Quintero Quintero" />;
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);