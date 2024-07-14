import React, { useState } from "react";
const Cards = ({ todo, setTodo, deleteTodo, filter }) => {
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editStatus, setEditStatus] = useState("");

  const filteredTodo = todo.filter((item) => {
    if (filter === "all") {
      return true;
    }
    return item.status === filter;
  });

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const handleStatusChange = (id, status) => {
    setTodo(
      todo.map((todo, index) =>
        index === id ? { ...todo, status: status } : todo
      )
    );
  };

  const handleEdit = (id, title, description, status) => {
    setEditId(id);
    setEditTitle(title);
    setEditDescription(description);
    setEditStatus(status);
  };

  const handleSubmitEdit = () => {
    if (editId !== null) {
      setTodo(
        todo.map((item, index) =>
          index === editId
            ? {
                ...item,
                title: editTitle,
                description: editDescription,
                status: editStatus,
              }
            : item
        )
      );
      setEditId(null);
      setEditTitle("");
      setEditDescription("");
      setEditStatus("");
    }
  };

  return (
    <div className="container container-card">
      <h3>My Todos</h3>
      <div className="row row-cols-1 row-cols-md-3  g-3">
        {filteredTodo.map((element, index) => {
          return (
            <div key={index}>
              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    {editId === index ? (
                      <form onSubmit={handleSubmitEdit}>
                        <div className="row">
                          <div className="col-md-6">
                            <label className="form-label">Title</label>
                            <input
                              type="text"
                              value={editTitle}
                              onChange={(e) => setEditTitle(e.target.value)}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Description</label>
                            <input
                              type="text"
                              value={editDescription}
                              onChange={(e) =>
                                setEditDescription(e.target.value)
                              }
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-8">
                            <label className="form-lable">Status :</label>
                            <select
                              className="form-select"
                              value={editStatus}
                              onChange={(e) => setEditStatus(e.target.value)}
                            >
                              <option value="not_completed">
                                Not Completed
                              </option>
                              <option value="completed">Completed</option>
                            </select>
                          </div>

                          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button
                              type="submit"
                              className="btn tit-clrblu btn-sm"
                            >
                              Update
                            </button>
                          </div>
                        </div>
                      </form>
                    ) : (
                      <>
                        <div className="card-text">Title : {element.title}</div>
                        <div className="card-text">
                          Description : {element.description}
                        </div>
                        <label className="form-lable">Status :</label>
                        <select
                          className="form-select"
                          value={element.status}
                          onChange={(event) =>
                            handleStatusChange(index, event.target.value)
                          }
                        >
                          <option className="clar" value="not_completed ">Not Completed</option>
                          <option className="clr" value="completed">Completed</option>
                        </select>
                      </>
                    )}
                  </div>
                  <div className="card-footer">
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                      <button
                        type="button"
                        className="btn btn-sm tit-clrr"
                        onClick={() =>
                          handleEdit(
                            index,
                            element.title,
                            element.description,
                            element.status
                          )
                        }
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm tit-clrred"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;   