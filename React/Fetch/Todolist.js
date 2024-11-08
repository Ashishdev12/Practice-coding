import React from 'react'

function TodoList({title,price,image,category}) {
  return (
    <div className='card'>
     <img src={image} alt="" />
     <p>{title}</p>
     <p>{price}</p>
     <p>{category}</p>
    </div>
  )
}

export default TodoList
