import React from 'react';

export default class ItemsList extends React.Component {
  constructor (props){
    super(props);
  }

  render (){
    let items = this.props.items;

    return (<div className="items-list-wrapper col-12 grid-center">
      <ul className="item-list col-8 grid-spaceBetween">
        {
          items.length > 0 ? (
            items.map((item, index) => {
              return <li className="item col" key={index}>
                <div className="item-box">
                  <img src={item.imageURL} />
                  <h3>{item.name}</h3>
                  <div>{item.currency} {item.price}</div>
                  <button onClick={event => this.props.action(item.id)}>{this.props.actionMsg}</button>
                </div>
              </li>
            })
          ) : (<li>Cargando lista...</li>)
        }
      </ul>
    </div>);
  }
}
