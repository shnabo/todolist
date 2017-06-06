import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem.js';


class MyList extends Component {
  constructor (props) {
    super()
    this.state = {
      toDoItemArray: props.theList
    }
  }
  clearList (e) {
    this.setState({
      toDoItemArray: []
    });
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
        <button onClick={(e) => this.clearList(e)}> Finished the list! </button>
      </div>
    );
  }
}

export default MyList;;
