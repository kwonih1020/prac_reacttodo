// src/App.js

import React from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  // Store에 있는 todos 모듈 state 조회하기
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);

  const dispatch = useDispatch();

  return (
    <div>
      <input type="text" />
      <input type="text" />
    </div>
  );
};

export default App;
