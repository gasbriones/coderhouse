import React from 'react';
import './style.css'

export default class CreatePost extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            title:'',
            body:'',
            id:0,
            userId:0

        }
    }
     onChangeTitle = (e) => {
        this.setState({
            title:e.target.value
        })
     };

    onChangeTextArea = (e) => {
        this.setState({
            body:e.target.value
        })
    };

    _handleSubmit = () => {
        this.props.onPostSubmit(this.state)
        this.setState({
            title:'',
            body:'',
            id:0,
            userId:0
        })
    }

    render (){
        return (
            <div className="create-post">
                <input type="text" onChange={this.onChangeTitle} className="title" placeholder="Título" value={this.state.title}/>
                <textarea onChange={this.onChangeTextArea} className="textarea" placeholder="Escriba su post" value={this.state.body} />
                <button onClick={this._handleSubmit} >Enviar</button>
            </div>
        );
    }
}