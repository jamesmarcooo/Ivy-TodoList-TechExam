import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    // input for the value of the state, setInput function that will update the input value
    const [input, setInput] = useState(props.edit ? props.edit.value : ''); //init - empty string 

    //init input Ref for useEffect
    const inputRef = useRef(null);

    //allows to focus on the specific part (input form)
    useEffect(() => {
      inputRef.current.focus();
    });

    const handleChange = e => {
        /*saves the input once submitted*/
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        /*function that prevents the reloading of the page when a task was added*/
        e.preventDefault();

        props.onSubmit({
            /* generates unique ID for task for the input as props*/
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput(''); //resets the form into empty string
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}> {/*calls handleSubmit when button was clicked*/}
            <input 
                type='text' 
                placeholder='Add a task' 
                value={input} 
                name="text" 
                className='todo-input'
                onChange={handleChange}
                ref = {inputRef}
            />
            <button className="todo-button">Add Task</button>
        </form>
    )
}

export default TodoForm
