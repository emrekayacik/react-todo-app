import React from 'react';
import './List.css'
import ListItem from './ListItem'

class List extends React.Component{
    constructor(props){
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }
    deleteItem(itemToDelete){
        this.props.deleteItem(itemToDelete)
    }
    render(){
        return(
            <ol className="gradient-list">
                {
                    this.props.list.map((item,index)=>{
                      return <ListItem deleteItem={this.deleteItem} key={index} index={index} item={item} />  
                    })
                }
            </ol>
        );
    }
}


export default List;