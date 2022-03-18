import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { v4 as uuid } from "uuid";

export interface Task {
  id: string;
  text: string;
  isCompleted: boolean;
}

export interface TodoState {
  tasks: Task[];
}

const initialState: TodoState = {
  tasks: [{ id: "iojsdifj", text: "task 1", isCompleted: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const newTodo = {
        id: uuid(),
        text: action.payload,
        isCompleted: false,
      };

      state.tasks.push(newTodo);
    },
    removeTask: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
  },
});

export const { addTask, removeTask } = todoSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTasks = (state: RootState) => state.todo.tasks;

export default todoSlice.reducer;
