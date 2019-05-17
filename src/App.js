import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos.js';
import Form from './components/Form.js';

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      todos:[
      {
      "id": 1,
      "description": "Get out of bed",
      "deadline": "2017-09-11",
      "done": true
      },
      {
      "id": 2,
      "description": "Brush teeth",
      "deadline": "2017-09-10",
      "done": false
      },
      {
      "id": 3,
      "description": "Eat breakfast",
      "deadline": "2017-09-09",
      "done": false
      }
     ]
    }    
  } 

  deleteTodo = (id) => {
    console.log(id);
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({todos: todos})
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({todos: todos});
  }

  render() {
    return (
      <div className="container">
        <div className="header"><i className="fas fa-clipboard-list"></i><h2>Todo List</h2></div>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <Form addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App;
