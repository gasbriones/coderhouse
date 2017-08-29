import React from 'react';
import './style.css';

export default class Button extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button className={this.props.color} onClick={this.props.event}>{this.props.value}</button>
        )
    }
}
