import React from 'react';
import './App.css';
import Header from './Header';
import List from './List';
import Form from './Form';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: 'Welcome To TodoApp!',
            list: ['item 1','item 2','item3']
        }
        this.onFormSubmit= this.onFormSubmit.bind(this);
        this.deleteItem= this.deleteItem.bind(this);

    }
    onFormSubmit(itemToAdd){
        const newList = this.state.list;
        newList.push(itemToAdd);
        this.setState({
            list: newList
        });
    }
    deleteItem(itemToDelete){
        const oldList = this.state.list;
        const newList = oldList.filter(a=>a !== itemToDelete);
        this.setState({
            list: newList
        });
    }
    render(){
        return (
            <div className="container text-center app-header" >
                <Header title={this.state.title}  />
                <List deleteItem={this.deleteItem} list={this.state.list} />
                <Form onFormSubmit={this.onFormSubmit} />
            </div>
        );
    }
}

export default App;
