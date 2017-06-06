import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem.js';


class MyList extends Component {
  constructor (props) {
    super()
    this.state = {
      toDoItemArray: props.theList,
      newItem: ''
    }
  }
  clearList (e) {
    console.log("Clearing List");
    this.setState({
      toDoItemArray: []
    });
  }

  newItemChange (e) {
    this.setState ({
      newItem: e.target.value
    });
  }
  addItem (e) {
    e.preventDefault();
    const toDos = this.state.toDoItemArray;
    toDos.push(this.state.newItem);
    this.setState({toDoItemArray: toDos, newItem: ""});
  }

  render() {

    let todoItems = this.props.theList.map( (item, index) => (
      <ListItem doThis={item} key={index} />
    ))

    return (
      <div>
        <h1> Things I should stopp procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
        <form>
          <input type = "text"
            placeholder = "Type an item here"
            onChange = {(e)=> this.newItemChange(e)}
            value = {this.state.newItem}
          />
          <button onClic = {(e) => this.addItem(e)} >Add It! DO IT NOW! </button>
        </form>
        <button onClick= {(e) => this.clearList(e)}> Finished the list! </button>
      </div>
    );
  }
}

export default MyList;;
