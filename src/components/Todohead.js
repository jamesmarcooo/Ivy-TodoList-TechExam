import React from 'react'
import { Link } from 'react-router-dom';


function Todohead() {  
    return (
        // Header todoList
        <div>
             <Link to="/" className="todo-head">       {/*Implement router that links the home page when clicked */}
                TO-DO LIST  
            </Link>
        </div>
    )
}

export default Todohead
