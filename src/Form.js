import React from 'react';

class Form extends React.Component{

    constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(e) {
        const itemToAdd = e.target.tbxAddItem.value.trim();
        if(itemToAdd && itemToAdd !== "" && itemToAdd !== undefined && itemToAdd !== null){
            this.props.onFormSubmit(itemToAdd);
            document.getElementById('tbxAddItem').value = '';
        }
        else{
            alert("Please enter a valid ToDoItem!");
        }
        e.preventDefault();
    }
    clearItems = (e) => {
        this.props.clearItems();
        e.preventDefault();
    };
    render(){
        return (
                <div>
                        <form onSubmit={this.onFormSubmit}>
                                <div className="form-group">
                                    <label htmlFor="tbxAddItem">Item to insert</label>
                                    <input type="text" className="form-control" id="tbxAddItem" placeholder="Enter an item" />
                                </div>
                                <button type="submit" className="btn btn-primary">Insert</button>
                                <button onClick={this.clearItems} className="btn btn-danger ml-2">Clear Items</button>
                        </form>
                </div>);
    }

}

export default Form;