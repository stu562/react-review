import React from "react";
import ListEntry from "./ListEntry.jsx";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.addToArray = this.addToArray.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addClickEvent = this.addClickEvent.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      string: "",
      array: []
    };
  }

  addToArray(e) {
    this.setState({
      string: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    //treat this.state as if it was immutable
    this.setState({
      string: "",
      array: this.state.array.concat(this.state.string)
      //concat returns a new array
      //https://stackoverflow.com/questions/26253351/correct-modification-of-state-arrays-in-reactjs
      //ES6 way: array: [...this.state.array, this.state.string]
    });
    document.getElementById("myForm").reset();
  }

  addClickEvent(index) {
    let todos = this.state.array.slice();
    var newTodo = prompt("Edit", todos[index]);
    todos[index] = newTodo;
    this.setState({
      array: todos
    });
  }

  handleDelete(index) {
    //console.log(index);
    let todos = this.state.array.slice();
    todos.splice(index, 1);
    this.setState({
      array: todos
    });
  }

  render() {
    return (
      <div>
        Todo List <br />
        <form id="myForm">
          Add to List: <input name="array" onChange={this.addToArray} />
          <input type="submit" value="submit" onClick={this.handleSubmit} />
        </form>
        {/* This is String: {this.state.string} <br />
        This is Array: {this.state.array} <br /> */}
        {this.state.array.map((element, index) => (
          <ListEntry
            index={index}
            listItem={element}
            click={this.addClickEvent}
            delete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default List;
