import React from 'react';
import TodoList from './TodoList';
import Form from './Form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: '1a2b3c', name: 'laundry', completed: false },
        { id: '4d5e6f', name: 'dishes', completed: false },
        { id: '7g8h9i', name: 'groceries', completed: false },
      ]
    };
  }

  // Helper function to generate ID
  nanoid = () => {
    const int = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
    const hex = int.toString(16);
    return hex.padStart(5, '0');
  }

  // Add a Todo
  addTodo = async (name) => {
    const newTodo = {
      id: this.nanoid(),
      name: name,
      completed: false
    };
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo]
    }));
  }

  // Toggle the completed status of a Todo
  toggleTodo = (id) => {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: newTodos });
  }

  // Clear all completed Todos
  clearCompleted = () => {
    const newTodos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos: newTodos });
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
        <Form addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}


