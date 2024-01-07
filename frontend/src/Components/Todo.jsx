import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");
  const addtodo = (e) => {
    e.preventDefault();
    setTodo([...todo, task]);
    console.log(todo);
  };
  return (
    <>
      <div className="todoInput">
        <label className="parentLabel">
          <input
            type="text"
            placeholder="Enter your tasks"
            onChange={(e) => setTask(e.target.value)}
          ></input>
          <button onClick={addtodo}>Add Todo</button>
        </label>
        <div className="flexContainer">
          <div className="success">
            <h2>Complete Tasks</h2>
            <div className="successChild"></div>
          </div>
          <div className="pending">
            <h2>Pending Tasks</h2>

            {todo.map((todos, index) => (
              <div className="tasks" key={index}>
                <h2>{todos}</h2>
                <div className="buttonContainer">
                  <button>Complete</button>
                  <button>Update</button>
                  <button>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
