import React from 'react';

class Todo extends React.Component {
    render() {
        const { todo, toggleTodo } = this.props;
        const { name, id, completed } = todo;
        const style = { textDecoration: completed ? 'line-through' : 'none' };

        return (
            <li onClick={() => toggleTodo(id)} style={style}>
                {name}
            </li>
        );
    }
}

export default Todo;
