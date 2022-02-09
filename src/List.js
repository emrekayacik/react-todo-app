import React from 'react';
import './List.css'
import ListItem from './ListItem'

class List extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ol className="gradient-list">
                {
                    this.props.list.map((item,index)=>{
                      return <ListItem unDoneItem={this.props.unDoneItem} doneItem={this.props.doneItem} deleteItem={this.props.deleteItem} key={index} index={index} item={item} />  
                    })
                }
            </ol>
        );
    }
}


export default List;