import React from 'react';

export class ToDoAppList extends React.Component{
    constructor(){
        super();
        this.removeItem = this.removeItem.bind(this);
    }

    removeItem(elem){
        var value = elem.target.parentNode.querySelector('span').innerText;
        this.props.removeItem(value);
    }

    render(){

        var itens = this.props.tasks.map((elem, i) => {
            return (
                <li key={i}>
                    <span>{elem}</span>
                    <button onClick={this.removeItem}>x</button>
                </li>
            );
        });

        return(
            <ul>
                {itens}
            </ul>
        );
    }

}