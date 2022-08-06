// src/App.js

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { __getTodos } from "./redux/modules/todosSlice";

const App = () => {
  const { isLoading, error, todos } = useSelector((state) => state.todos);
  // console.log(todos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
      {/* <form type="submit" onSubmit={}> */}
      <form type="submit">
        <input type="text" placeholder="제목을 입력하시오" />
        <input type="text" placeholder="내용을 입력하시오" />
        <button>추가하기</button>
      </form>
    </div>
  );
};

export default App;
