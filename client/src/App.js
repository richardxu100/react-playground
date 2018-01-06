import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageComponent from './ImageComponent';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      text: '',
      todos: [],
    };
  }

  componentDidMount = () => {
    fetch('/todos')
      .then(res => res.json())
      .then((data) => {
        console.log('data: ', data);
      }).catch((err) => console.log(err))
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter' && this.state.text !== '') {
      const updatedTodos = this.state.todos;
      updatedTodos.push({
        text: this.state.text,
        id: Date.now(),
      });
      this.setState({
        todos: updatedTodos,
        text: '',
      });
    }
  }

  deleteTodo = (id) => {
    let updatedTodos = this.state.todos;
    updatedTodos = updatedTodos.filter(todo => todo.id !== id);
    this.setState({ todos: updatedTodos });
  } 

  renderTodos() {
    return this.state.todos.map((todo) => {
      return <li 
        onClick={() => this.deleteTodo(todo.id)} 
        key={todo.id}>
        {todo.text}
      </li>
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo App</h1>
        </header>
        <input 
          type="text" 
          value={this.state.text}
          onKeyPress={this.handleKeyPress} 
          onChange={this.handleChange}/>
        <ul>
          {this.renderTodos()}
        </ul>

        <ImageComponent />
      </div>
    );
  }
}

export default App;
