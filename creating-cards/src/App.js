import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// data
import { todos } from './todos.json';

// subcomponents
import TodoForm from './components/TodoForm';
import Card from './components/Card'

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  removeTodo(index) {
    console.log("Entrando a Borrar");
    console.log(index)
    console.log(this);
    console.log(this.state)
    // this.setState({
    //   todos: [...this.state.todos, this.props.todos]
    // })
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTodo(todo) {
    console.log(this)
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {


    // RETURN THE COMPONENT
    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Tasks
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>
            <div className="col-md-8">
              {/* <div className="row"> */}
                <Card todos={this.state.todos} remove={this.removeTodo}></Card>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
