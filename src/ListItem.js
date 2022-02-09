import React from 'react';


class ListItem extends React.Component{
    constructor(props){
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }
    deleteItem(itemToDelete,e){
        this.props.deleteItem(itemToDelete);
        e.preventDefault();
    }
    render(){
        return (
            <li value={this.props.index}>{this.props.item} <button onClick={() => this.deleteItem(this.props.item)} style={{float: "right"}} className="btn btn-outline-danger btn-sm">Delete</button></li>
        );
    }
}

export default ListItem;