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
        const checked = document.getElementById(itemToDone).childNodes[1].childNodes[0].checked;
        

        if(checked)
            this.props.doneItem(itemToDone);
        
        else
            this.props.unDoneItem(itemToDone);
        
    }
    render(){
        return (
            <li id={this.props.index} value={this.props.index}>
                {this.props.item}
                <div style={{float: "right"}}>
                <input id={this.props.index} onChange={() => this.doneItem(this.props.index)} type="checkbox" className="form-check-input" id="checkDone" />
               <label className="form-check-label mr-2" htmlFor="checkDone">Done</label>
                 <button onClick={() => this.deleteItem(this.props.item)} className="btn btn-outline-danger btn-sm">Delete</button>
                </div>
                </li>
        );
    }
}

export default ListItem;