import { useState } from "react";
import { useTodo } from "../context/todo";


function TodoForm() {
  const [todo, setTodo] = useState("")
  const {addTodo} = useTodo()

  const addCurrentTodo = (e) => {
      e.preventDefault();

      if(!todo) return
      addTodo({id: Date.now(), todo, completed:false})
      setTodo("")
  }

  return (
    <form onSubmit={addCurrentTodo} className="flex">
      <input
        type="text"
        value={todo}
        onChange={(e)=>{setTodo(e.target.value)}}
        placeholder="Write Here..."
        className="w-full border border-none rounded-l-lg px-5 py-3 outline-none bg-white/30 font-semibold"
      />
      <button
        type="submit"
        className="rounded-r-lg px-6 py-3 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
