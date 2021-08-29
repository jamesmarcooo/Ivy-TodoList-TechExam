import React, { useState } from 'react'

function TodoForm(props) {
    /* input for the value of the state, setInput function that will update the input value */
    const [input, setInput] = useState('') //init - empty string 

    const handleChange = e => {
        /*saves the input once submitted*/
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        /*function that prevents the reloading of the page when a task was added*/
        e.preventDefault();

        // props.onSubmit({
        //     /* generates unique ID for task for the input as props*/
        //     id: Math.floor(Math.random() * 10000),
        //     text: input
        // })

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
            />
            <button className="todo-button">Add Task</button>
        </form>
    )
}

export default TodoForm
