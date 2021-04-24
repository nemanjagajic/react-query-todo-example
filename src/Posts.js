import { useState } from "react";
import { useAddTodo } from "./useAddTodo";
import { useFetchTodos } from "./useFetchTodos";

const Posts = () => {
  const { data, isLoading, isFetching } = useFetchTodos();

  const [inputText, setInputText] = useState("");

  const { addTodo, isAddingTodo } = useAddTodo({
    clearInputText: () => setInputText("")
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data?.map((item) => (
        <div key={item.title}>{item.title}</div>
      ))}
      <input value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button
        onClick={() => {
          addTodo(inputText);
        }}
      >
        Add todo
      </button>
      {isFetching && <div>Updating...</div>}
      {isAddingTodo && <div>Adding todo...</div>}
    </div>
  );
};

export default Posts;
