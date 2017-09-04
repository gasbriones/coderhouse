import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Blink from './App';
import registerServiceWorker from './registerServiceWorker';


class App extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            mensaje:'hola mundo'
        }
    }
    _handleClick =() => {
        this.setState({
            mensaje:'nuevo mensaje'
        })
    }
    render () {
        return (
            <div>
            <button onClick={this._handleClick}>
                clickme
            </button>
                <Blink text={this.state.mensaje}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();

//ReactDOM.unmountComponentAtNode(document.getElementById('root'))
