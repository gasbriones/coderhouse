import React from 'react';
import Button from '../button/Button';
import './style.css';

export default class BtnGroup extends React.Component {
    render() {
        return (
            <div className="btn-group-container">
                {
                    this.props.collection.map(row => {
                        return <Button value={row.value} color={row.color} event={row.event}/>
                    } )
                }
            </div>
        )
    }
}