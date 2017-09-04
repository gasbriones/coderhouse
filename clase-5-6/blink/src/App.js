import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            show:true
        }
    }

    // se ejecuta justo antes de ser montado el componente
    componentWillMount (){
        console.log('componentWillMount')
    }
    // se ejecuta cuando fue montado el componente
    componentDidMount () {
        console.log('componentDidMount')
        this.initBlink()
    }
    // se ejecuta justo antes de ser desmontado
    componentWillUnmount () {
        console.log('componentWillUnmount')
    }

    //se ejecuta justo antes de que el componente obtenga las nuevas propiedades
    componentWillReceiveProps () {
        console.log('componentWillReceiveProps')
    }
    //se ejecuta justo antes que el componente se actualizo
    componentWillUpdate (){
        console.log('componentWillUpdate')
    }



    initBlink = () => {
        console.log('blink')
        setInterval(()=>{
            this.setState({
                show:!this.state.show
            })
        },1000)
    };

    render (){
        console.log('render');
        return (
            <div>
                {this.state.show &&
                    <span>{this.props.text}</span>
                }
            </div>
        );
    }
}

export default App;
