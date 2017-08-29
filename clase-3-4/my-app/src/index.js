import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BtnGroup from './components/ButtonGroup/BtnGroup';

import registerServiceWorker from './registerServiceWorker';


let btnCollection = [
    {
        value:'Enviar',
        color:'success',
        event: ()=> {alert('Enviado!!')}
    },
    {
        value:'Esperar',
        color:'waiting',
        event: ()=> {alert('Esperando!!')}
    },
    {
        value:'Cancelar',
        color:'cancel',
        event: ()=> {alert('X cancelado X')}
    }
]

ReactDOM.render(<BtnGroup collection={btnCollection} />,
    document.getElementById('root'));



registerServiceWorker();
