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
            list: []
        }
        this.onFormSubmit= this.onFormSubmit.bind(this);
        this.deleteItem= this.deleteItem.bind(this);

    }
    componentDidMount(){
        const json = localStorage.getItem('list');
        const obj = JSON.parse(json);
        this.setState({
            list: obj
        })
    }
    componentDidUpdate(prevProps,prevState){
        const json = JSON.stringify(this.state.list);
        localStorage.setItem('list',json);
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
    clearItems = () => {
        this.setState({
            list : []
        });
    }
    doneItem = (itemToDone) => {
        const element = document.getElementById(itemToDone.replace('check',''));
        element.style.textDecoration = "line-through";
    }
    unDoneItem = (itemToDone) => {
        const element = document.getElementById(itemToDone.replace('check',''));
        element.style.textDecoration = "none";
    }
    render(){
        return (
            <div className="container text-center app-header" >
                <Header title={this.state.title}  />
                <List unDoneItem={this.unDoneItem} doneItem={this.doneItem} deleteItem={this.deleteItem} list={this.state.list} />
                <Form clearItems={this.clearItems} onFormSubmit={this.onFormSubmit} />
            </div>
        );
    }
}

export default App;
