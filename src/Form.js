import React from 'react';

class Form extends React.Component{

    constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(e) {
        const itemToAdd = e.target.tbxAddItem.value.trim();
        console.log(itemToAdd);
        this.props.onFormSubmit(itemToAdd);
        e.preventDefault();
        document.getElementById('tbxAddItem').value = '';
    }
    render(){
        return (
                <div>
                        <form onSubmit={this.onFormSubmit}>
                                <div className="form-group">
                                    <label htmlFor="tbxAddItem">Item to insert</label>
                                    <input type="text" className="form-control" id="tbxAddItem" placeholder="Enter an item" />
                                </div>
                                <button type="submit" className="btn btn-primary">Insert</button>
                        </form>
                </div>);
    }

}

export default Form;