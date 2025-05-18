'use client';
import { useEffect, useState } from "react";
import AddTodo from "./Components/AddTodo/AddTodo";
import TodoList from "./Components/TodoList/TodoList";
import axios from "axios";
import { getTodos, addTodo as addTodoAPI, toggleCompleteTodo, deleteTodo } from "@/utils/api";

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos()
      .then(res => setTodos(res.data))
      .catch(err => console.error("error fetching todos:", err));
  },[]);

  const addTodo = async (text) =>{
    try {
      const res = await addTodoAPI({text});
      console.log(res.data);
      setTodos((prevTodos) => [...prevTodos, res.data]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const handlToggleComplete = async (id) => {
    try {
      const res = await toggleCompleteTodo(id);
      console.log(res.data);
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    } catch (error) {
      console.error("Error toggling todo:", error);
    }
  }

  const handleDeleteTodo = async (id) => {
    try {
      const res = await deleteTodo(id);
      console.log(res.data);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <main className="p-2">
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} handleToggleComplete={handlToggleComplete} handleDeleteTodo={handleDeleteTodo}/>
    </main>
  )
}