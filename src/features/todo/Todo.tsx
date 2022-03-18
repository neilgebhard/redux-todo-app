import { SyntheticEvent, useRef } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectTasks, addTask, removeTask } from "./todoSlice";

export default function Counter() {
  const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null!);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(addTask(inputRef.current.value));
    inputRef.current.value = "";
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" />
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} onClick={() => dispatch(removeTask(task.id))}>
            {task.text}
          </li>
        ))}
      </ul>
    </>
  );
}
