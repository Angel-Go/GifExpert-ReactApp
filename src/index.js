import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import GifExpertApp from './GifExpertApp';


ReactDOM.render(
  // StrictMode es una herramienta para destacar problemas potenciales en la aplicación.
  // Al igual que Fragment, StrictMode no renderiza nada en la interfaz de usuario.
  // Las comprobaciones hechas por el modo estricto solamente son ejecutadas en el 
  // modo de desarrollo; no van a impactar producción.
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
  document.getElementById('root')
);
