import React from 'react';
import './style.css';

export default class PostList extends React.Component {
    constructor(props){
        super(props);
    }

    render (){
        return(<div className="lista">
            <ul>
                {this.props.list.map(post => {
                    return <li className="item">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <button onClick={event => this.props.onVote(post.id) }>{post.userId}</button>
                    </li>
                })}
            </ul>
        </div>)
    }

}