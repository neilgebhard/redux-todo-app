import todoReducer, { TodoState, addTask, removeTask } from "./todoSlice";

describe("counter reducer", () => {
  const initialState: TodoState = {
    tasks: [{ id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed", text: "new task" }],
  };
  it("should handle initial state", () => {
    expect(todoReducer(undefined, { type: "unknown" })).toEqual({
      tasks: [],
    });
  });

  it("should handle increment", () => {
    const actual = todoReducer(initialState, addTask("new task 2"));
    expect(actual.tasks).toHaveLength(2);
    expect(actual.tasks[1].text).toBe("new task 2");
  });

  it("should handle decrement", () => {
    const actual = todoReducer(
      initialState,
      removeTask("1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed")
    );
    expect(actual.tasks).toHaveLength(0);
  });
});
