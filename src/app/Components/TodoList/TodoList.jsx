import React from 'react'

export default function TodoList({ todos, setTodos }) {
    return (
        <div className='my-4'>
            <div className='text-sm pl-2'>Todo List</div>

            {todos.map((todo) => (
                <div key={todo.id} className='flex bg-gray-900 w-fit p-2 rounded-2xl my-1'>
                    <div className={`${todo.completed ? 'flex-1 line-through text-gray-700' : 'flex-1'}`}>
                        {todo.title}
                    </div>
                    <div className='flex flex-none pl-2 text-black'>
                        |
                        <input
                            type="checkbox"
                            name="isDone"
                            id="iDone"
                            aria-label='isDonne'
                            className=' size-5 self-center mx-2'
                            checked={todo.completed}
                            onChange={() => {
                                setTodos((prevTodos) =>
                                    prevTodos.map((t) =>
                                        t.id === todo.id ? { ...t, completed: !t.completed } : t
                                    )
                                );
                            }}
                        />
                    </div>
                    <div className='flex flex-none text-black'>
                        |
                        <button
                            className='rounded-2xl text-yellow-600 underline hover:text-red-700 px-2 cursor-pointer'
                            onClick={() => {
                                setTodos((prevTodos) =>
                                    prevTodos.filter((t) => t.id !== todo.id)
                                );
                            }}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
