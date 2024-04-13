import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: '' };
    }

    handleInputChange = (event) => {
        this.setState({ input: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.input);
        this.setState({ input: '' }); // Clear input after submission
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.input}
                    onChange={this.handleInputChange}
                    placeholder="Add a new todo..."
                />
                <button type="submit">Add Todo</button>
                <button type="button" onClick={this.props.clearCompleted}>Clear Completed</button>
            </form>
        );
    }
}

export default Form;
