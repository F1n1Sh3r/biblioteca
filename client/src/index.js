// Importe as bibliotecas necessárias
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import reportWebVitals from './components/reportWebVitals';
// Renderize o componente App no elemento com o ID 'root'

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

reportWebVitals();
