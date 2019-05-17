import React from 'react';

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
               <div  className="content" key={todo.id}> 
                 <div className="todoList">
                   <span className="listItem">{todo.description}</span>
                   <button className="del-btn" onClick={() => {deleteTodo(todo.id)}}>X</button>    
                 </div>                                                      
               </div> 
            )
        })
    ) : (
        <p>No todo's </p>
        )
    return (
        <div className="my-todos">
          {todoList}
        </div>
    )  
}

export default Todos;