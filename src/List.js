import React from 'react';
import './List.css'
import ListItem from './ListItem'

function List(props){
        return(
            <ol className="gradient-list">
                {
                      props.list.map((item,index)=>{
                      return <ListItem unDoneItem={props.unDoneItem} doneItem={props.doneItem} deleteItem={props.deleteItem} key={index} index={index} item={item} />  
                    })
                }
            </ol>
        );
    
}


export default List;