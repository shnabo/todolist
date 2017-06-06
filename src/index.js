import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './App';
import './index.css';

var toDos = ["Swimming with bear cubs", "sleeping with salmon", "swimming with elephants"]

ReactDOM.render(<MyList theList={toDos} />, document.getElementById('root')
);
