import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todoName: '',
        }
    };

    handleChange = event => {
        this.setState({
        [event.target.name]: event.target.value
        });
      }

    todoHandler = event => {
        // this.state.fullList.push();
        event.preventDefault();
        this.props.addItem(this.state.todoName);
      };


    render() {
        return (
            <form className="todo-form" onSubmit={this.todoHandler}>
                {/* {Here, I need to pass the user's input value up to App as props.} */}
                <input 
                type="text" 
                name="todoName"
                placeholder="Enter To-Do"
                value={this.todoName}
                onChange={this.handleChange}
                >
                </input>

                <button 
                >
                    Add To-Do
                </button>
            </form>
        )
    }
}


export default TodoForm;