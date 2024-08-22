import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => {
        prevTodo.id === id ? todo : prevTodo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) => {
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo;
      })
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="bg-[#1d3150] w-full max-w-6xl mx-auto shadow-xl rounded-lg px-20 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-6 mt-2">
            Write Your Todos
          </h1>
          <div className="mb-4">
            {/* <TodoForm /> */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* <TodoItem />   */}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
