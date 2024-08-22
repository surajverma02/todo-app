function TodoForm() {
  return (
    <form className="flex">
      <input
        type="text"
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
