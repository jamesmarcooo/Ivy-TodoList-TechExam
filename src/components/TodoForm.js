import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    // input for the value of the state, setInput function that will update the input value
    const [input, setInput] = useState(props.edit ? props.edit.value : ''); //init - empty string; retains current task text when updating

    //init input Ref for useEffect
    const inputRef = useRef(null);

    //allows to focus on the specific part (input form)
    useEffect(() => {
      inputRef.current.focus();
    });

    const handleChange = e => {
        /*update and saves the input once submitted*/
        setInput(e.target.value)
    }

    const handleSubmit = async(e) => {
        /*function that prevents the reloading of the page when a task was added*/
        e.preventDefault();

        try{
          props.onSubmit({
              /* generates unique ID for task for the input as props*/
              id: Math.floor(Math.random() * 10000),
              text: input
          })

          setInput(''); //resets the form into empty string

        }catch(error){
          console.log(error);
        }
        
    }

return (
    <form onSubmit={handleSubmit} className='todo-form'> {/*calls handleSubmit when button was clicked*/}
      {props.edit ? (
        <>
          <input
            placeholder='Update your task'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a task'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  )
}

export default TodoForm
