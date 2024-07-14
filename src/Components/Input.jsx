import React, { useState } from "react";

const Input = ({ newTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = () => {
    newTodo(title, desc);
    setTitle("");
    setDesc("");
  };

  return (
    <div className="container container-input">
      <h3 className="fw-bold tit-clr">My Todo</h3>
      <div className="row g-3">
        <div className="col-6">
          <input
            type="text"
            placeholder="Title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="col-6">
          <input
            type="text"
            placeholder="Description"
            className="form-control"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
         
        </div>
        
        <div className="d-grid gap-2 col-4 mx-auto">
        <button className="btn btn-outline-success" onClick={handleSubmit}>
            Add-Todo
          </button> 
          
        </div>
      </div>
    </div>
  );
};

export default Input;