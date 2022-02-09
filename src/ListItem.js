import React from 'react';


class ListItem extends React.Component{
    constructor(props){
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }
    deleteItem(itemToDelete){
        this.props.deleteItem(itemToDelete);
    }
    doneItem = (itemToDone) => {
        const element = document.getElementById(itemToDone);
        const checked = element.checked;
        if(checked)
            this.props.doneItem(itemToDone);
        
        else
            this.props.unDoneItem(itemToDone);
        
    }
    render(){
        const idx = this.props.index;
        return (
            <li id={this.props.index} value={this.props.index}>
                {this.props.item}
                <div style={{float: "right"}}>
                <input id={"check"+idx} onChange={() => this.doneItem("check"+idx)} type="checkbox" className="form-check-input" />
               <label className="form-check-label mr-2" htmlFor={"check"+idx}>Done</label>
                 <button onClick={() => this.deleteItem(this.props.item)} className="btn btn-outline-danger btn-sm">Delete</button>
                </div>
                </li>
        );
    }
}

export default ListItem;