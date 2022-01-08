import React from 'react'



function List() {
    return (
       
            <div className="eachTodoList" >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" value={props.status} onChange={
                  props.setTodos({Title:"ggfh"})
              } className="check" name="" id="" />
              <p>{props.Title}</p>
            </div>

            <i className="fas fa-trash delet"></i>
          </div>
            
      
    )
}

export default List
