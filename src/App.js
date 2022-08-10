// src/App.js

import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { __getTodos, __postTodo } from "./redux/modules/todosSlice";

const App = () => {
  const { todos } = useSelector((state) => state.todos);
  console.log(todos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  const [inputs, setInputs] = useState({
    user: "",
    title: "",
    body: "",
  });

  // if (isLoading) {
  //   return <div>로딩 중....</div>;
  // }

  // if (error) {
  //   return <div>{error.message}</div>;
  // }

  const onSubmitHandler = () => {
    dispatch(__postTodo(inputs));
    setInputs({
      user: "",
      title: "",
      body: "",
    });
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <div>
      <form
        type="submit"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler();
        }}>
        <label htmlFor="title">작성자</label>
        <input name="user" onChange={onChangeHandler} value={inputs.user} />
        <label htmlFor="title">제목</label>
        <input name="title" onChange={onChangeHandler} value={inputs.title} />
        <label htmlFor="body">내용</label>
        <textarea name="body" onChange={onChangeHandler} value={inputs.body} />
        <button>추가하기</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.id}</h3>
          <h3>{todo.user}</h3>
          <h3>{todo.title}</h3>
          <h3>{todo.body}</h3>
        </div>
      ))}
    </div>
  );
};

export default App;
