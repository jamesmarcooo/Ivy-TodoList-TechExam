import React from 'react'
import { Link } from 'react-router-dom';


function Todohead() {  
    return (
        <div>
            <Link to="/" className="todo-head">
                TO-DO LIST  
            </Link>
        </div>
    )
}

export default Todohead
