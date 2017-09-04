import React, {Component} from 'react';
import BtnGroup from './components/ButtonGroup/BtnGroup';
import './App.css';


let morningGreeting = [
    {
        value: 'Good morning',
        color: 'morning',
        event: () => {
            alert('Buenos días!!')
        }
    },
    {
        value: 'Hello',
        color: 'morning',
        event: () => {
            alert('Hola!!')
        }
    },
    {
        value: 'Welcome',
        color: 'morning',
        event: () => {
            alert('Bienvenido')
        }
    }
];

let afternoonGreeting = [
    {
        value: 'Good afternoon',
        color: 'afternoon',
        event: () => {
            alert('Buenas tardes')
        }
    },
    {
        value: 'How do you do?',
        color: 'afternoon',
        event: () => {
            alert('¿Cómo te va?')
        }
    },
    {
        value: 'What’s new?',
        color: 'afternoon',
        event: () => {
            alert('¿Qué hay de nuevo?')
        }
    }
];

let nightGreeting = [
    {
        value: 'Good evening',
        color: 'night',
        event: () => {
            alert('Buenas noches')
        }
    },
    {
        value: 'What’s up?',
        color: 'night',
        event: () => {
            alert('¿Qué pasa?')
        }
    },
    {
        value: 'How are you?',
        color: 'night',
        event: () => {
            alert('¿Cómo está/s/n?')
        }
    }
]



class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            title:'Bienvenidos',
            login:{
                label:'logout',
                active:true
            }
        }
    }

    _handleClick = () =>{

        this.setState((prevSate) => {
            return {
                title:!prevSate.login.active ? 'Bienvenidos' : 'Gracias por su visita',
                login:{
                    label:!prevSate.login.active ? 'logout' : 'login',
                    active:!prevSate.login.active
                }
            }
        })
    }


    render() {
        return (
            <div className="App">
                <button onClick={this._handleClick} className={this.state.login.active ? 'red' : 'green' }>{this.state.login.label}</button>
                <h1>{this.state.title}</h1>
                {
                    this.state.login.active &&
                    <div>
                        <BtnGroup collection={morningGreeting}/>
                        <BtnGroup collection={afternoonGreeting}/>
                        <BtnGroup collection={nightGreeting}/>
                    </div>
                }
            </div>
        );
    }
}

export default App;
