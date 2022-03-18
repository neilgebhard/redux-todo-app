import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import todo from "../features/todo/todoSlice";
import counter from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    todo,
    counter,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
