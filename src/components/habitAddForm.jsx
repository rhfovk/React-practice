import React, { Component } from 'react';

class HabitAddForm extends Component {
    inputRef = React.createRef();

    onSubmit = (e) => {
        e.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.inputRef.current.value = '';
    };


    render() {
        return (
            <form className="add-form" onSubmit={this.onSubmit}>
                <input ref={this.inputRef} type="text" className="add-input" placeholder="Please Enter your Habit" />
                <button className="add-button">Add</button>
                
            </form>
        );
    }
}

export default HabitAddForm;