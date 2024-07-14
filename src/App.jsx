import React, { useState } from "react";
import Input from "./Components/Input";
// import Card from "./Components/Card";
import Cards from "./Components/Cards";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [filter, setFilter] = useState("all");
  const newTodo = (newTitle, newDescription) => {
    let data = {
      title: newTitle,
      description: newDescription,
      status: "not_completed",
    };

    setTodo([...todo, data]);
  };

  const deleteTodo = (id) => {
    setTodo(todo.filter((ele, index) => index !== id));
  };

  return (
    <div>
      <Input newTodo={newTodo} />
      <div className="container container-status">
        <label className="form-lable fw-bold">Status Filter :</label>&nbsp;
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option className="clar" value="not_completed">Not Completed</option>
          <option className="clr" value="completed">Completed</option>
        </select>
      </div>

      <Cards
        todo={todo}
        setTodo={setTodo}
        deleteTodo={deleteTodo}
        filter={filter}
      />
    </div>
  );
};

export default App;