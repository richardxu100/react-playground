import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ImageComponent from './ImageComponent'

import axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      todos: []
    }
  }

  componentDidMount = () => {
    axios
      .get('/todos')
      .then(res => {
        this.setState({ todos: res.data })
      })
      .catch(err => console.log(err))
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleKeyPress = e => {
    if (e.key === 'Enter' && this.state.text !== '') {
      const newTodo = {
        text: this.state.text,
        id: Date.now()
      }
      const updatedTodos = this.state.todos.concat(newTodo)
      this.setState({
        todos: updatedTodos,
        text: ''
      })

      axios.post('/todos', { newTodo })
    }
  }

  deleteTodo = id => {
    const updatedTodos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({ todos: updatedTodos })

    axios
      .delete('/todos', {
        data: { id }
      })
      .then(res => console.log('res: ', res))
      .catch(err => console.log('err: ', err))
  }

  renderTodos() {
    return this.state.todos.map(todo => {
      return (
        <li onClick={() => this.deleteTodo(todo.id)} key={todo.id}>
          {todo.text}
        </li>
      )
    })
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
          onChange={this.handleChange}
        />
        <ul>{this.renderTodos()}</ul>

        <ImageComponent />
      </div>
    )
  }
}
