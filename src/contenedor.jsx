import React, { useState } from 'react';
import ReactDOM from 'react-dom';



function Contenedor({ children }) {
  return (
    <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '20px' }}>
      {children}
    </div>
  );
}

function App() {
    return (
      <Contenedor>
        <h1>Actividad 3</h1>
        <p>Children Props</p>
      </Contenedor>
    );
  }

export default Contenedor;




ReactDOM.render(
    <App />,
    document.getElementById('rooot')
  );