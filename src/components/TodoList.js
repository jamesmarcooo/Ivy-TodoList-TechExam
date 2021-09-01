import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'


function TodoList() {
    //init todos state where setTodos function update the todos value
    const [todos, setTodos] = useState([]) //empty array

    const addTodo = async(todo) => {
        /* adds a task; neglects unnecessary space(s) in the input and empty string*/
        if(!todo.text || /^\s*$/.test(todo.text)) {//Regex 
            return
        }

        const newTodos = [todo, ...todos] //arrays of added tasks

        
        console.log('todos', todos)

        await fetch('http://localhost:8080/api/create', {
			method: 'POST',
			body: JSON.stringify( {id: todo.id, value:todo.text} ),
			headers: {
				'Content-Type': 'application/json'
			}
		})
        setTodos(newTodos)
    
    }

    const completeTodo = id => {
        /* tracking of the status of the task */
        let updatedTodos = todos.map(todo => {
          if (todo.id === id) {
            todo.isComplete = !todo.isComplete
          }
          return todo
        })
        setTodos(updatedTodos)
    }

    const removeTodo = async(id) => {
        /* removing a task thru filtering the spread array*/
        const removedArr = [...todos].filter(todo => todo.id !== id)
    
        await fetch('http://localhost:8080/api/delete', {
			method: 'POST',
			body: JSON.stringify({id: id}),
			headers: {
				'Content-Type': 'application/json'
			}
		})

        setTodos(removedArr)
    }

    const updateTodo = async(todoId, newValue) => {
        /* Editing the task */
        if(!newValue.text || /^\s*$/.test(newValue.text)) {//Regex 
            return
        }

        await fetch('http://localhost:8080/api/modify', {
			method: 'POST',
			body: JSON.stringify({old: todoId, new: newValue.text}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
        
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
        
    }


    return (
        <div>
            <h1>What's the plan for today?</h1>
            <TodoForm onSubmit={addTodo}/>                 {/*calls the function addTodo when submitted */}
            <Todo 
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    )
}

export default TodoList
