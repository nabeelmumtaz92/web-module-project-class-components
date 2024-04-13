import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    render() {
        const { todos, toggleTodo } = this.props;
        return (
            <ul>
                {todos.map(todo => (
                    <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
                ))}
            </ul>
        );
    }
}

export default TodoList;
