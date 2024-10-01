import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Contador() {
  const [contador, setContador] = useState(0);

  const Incrementar = () => {
    setContador(contador + 1);
  };

  const Reiniciar = () => {
    setContador(0);
  };

  return (
    <div>
      <h1>contador: {contador}</h1>
      <button onClick={Incrementar}>Incrementar</button>
      <button onClick={Reiniciar}>Reiniciar</button>
    </div>
  );
}

ReactDOM.render(
  <Contador />,
  document.getElementById('rt')
);