import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
    //init todos state where setTodos function update the todos value
    const [todos, setTodos] = useState([]) //empty array

    const addTodo = todo => {
        /* adds a task; neglects unnecessary space(s) in the input and empty string*/
        if(!todo.text || /^\s*$/.test(todo.text)) {//Regex 
            return
        }

        const newTodos = [todo, ...todos] //arrays of added tasks

        setTodos(newTodos) //updates the array
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

    const removeTodo = id => {
        /* removing a task */
        const removedArr = [...todos].filter(todo => todo.id !== id);
    
        setTodos(removedArr);
      };

    return (
        <div>
            <h1>What's the plan for today?</h1>
             <TodoForm onSubmit={addTodo}/> {/*calls the function addTodo when submitted */}
             <Todo 
                todos={todos}
                completeTodo={completeTodo}
             />
        </div>
    )
}

export default TodoList
