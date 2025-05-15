import React, { useState } from 'react'

export default function AddTodo({todos, setTodos}) {
    const [title, setTitle] = useState("");
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        if (name === "AddTodoIn") {
            setTitle(value);
        }
    }
    const handleAddTodo = () => {
        if (title.trim() === "") return;
        const newTodo = {
            id: Date.now(),
            title: title,
            completed: false,
        };
        setTodos ((prevTodos) => [...prevTodos, newTodo]);
        setTitle("");
        console.log(todos);
    }
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleAddTodo();
        }
    }
  return (
    <div>
        <div className='pl-2 text-sm'>Add new...</div>
        <div className='w-3/5 flex'>
            <input 
                type="text" 
                name="AddTodoIn" 
                id="ADin" 
                aria-label='AddTodoIn' 
                className='flex-1 bg-gray-900 rounded-2xl p-1 px-4 ring ring-gray-800   focus:ring-1 focus:ring-gray-700 focus:outline-none'
                onChange={handleInputChange}
                value={title}
                onKeyDown={handleKeyDown}
                />
            <button className='flex-none bg-gray-700 p-1 px-4 rounded-2xl ml-2 '>Add</button>
        </div>
    </div>
  )
}
