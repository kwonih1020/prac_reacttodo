// src/redux/modules/counterSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const __getTodos = createAsyncThunk(
  "getTodos",
  (payload, thunkAPI) => {}
);

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {},
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const {} = todosSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default todosSlice.reducer;
