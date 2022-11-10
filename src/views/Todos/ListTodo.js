import React from "react";
import AddTodo from "./AddTofo";
import "./ListTodo.scss";
import { toast } from "react-toastify";
import Color from "../HOC/Color";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "Marking video" },
      { id: "todo3", title: "Fix Bug" },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    // let currenttListTodo = this.state.listTodos;
    // currenttListTodo.push(todo);

    this.setState({
      listTodos: [...this.state.listTodos, todo],
      // listTodos: currenttListTodo,
    });
    toast.success("Wow so easy!");
  };
  handleDeleTodo = (todo) => {
    let currentTdos = this.state.listTodos;
    currentTdos = currentTdos.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currentTdos,
    });
    toast.success("Delete Succed!");
  };
  handleEditTodo = (todo) => {
    let { editTodo, listTodos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;

    //save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodosCopy = [...listTodos];
      let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);
      listTodosCopy[objIndex].title = editTodo.title;
      this.setState({
        listTodos: listTodosCopy,
        editTodo: "",
      });
      toast.success("Update Todo Success");
      return;
    }
    //edit
    this.setState({
      editTodo: todo,
    });
  };
  handleOnchangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <>
        <p>Simple Todo App with react</p>

        <div className="list-todo-container">
          <AddTodo addNewTodo={this.addNewTodo} />
          <div className="list-todo-content">
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmptyObj === true ? (
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {index + 1} -{" "}
                            <input
                              value={editTodo.title}
                              onChange={(event) =>
                                this.handleOnchangeEditTodo(event)
                              }
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}

                    <button
                      className="edit"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {isEmptyObj == false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>

                    <button
                      className="delete"
                      onClick={() => this.handleDeleTodo(item)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}
export default Color(ListTodo);
