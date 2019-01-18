import React from "react";
import ListEntry from "./ListEntry.jsx";

//stateful component
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //intial state
      string: "",
      array: []
    };
    // this.enterList = this.enterList.bind(this);
    this.changeString = this.changeString.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addClickEvent = this.addClickEvent.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(e) {
    console.log(e.target.value);
    this.setState({
      item: e.target.value
    });
  }
  // handleDelete
``
  addClickEvent(e) {
    console.log(e);
  }
  changeString(e) {
    this.setState({
      string: e.target.value
    });
  }
  handleSubmit(e) {
    //prevents refresh on submit button click
    e.preventDefault();
    //adding some functionality
    this.setState({
      array: [...this.state.array, this.state.string]
    });
    document.getElementById("myForm").reset();
  }

  render() {
    return;
    <div>
      hello from List Component
      <br />
      List: <input type="text" name="item" onChange={this.enterList} />
      <form id="myform">
        Add to Array:{" "}
        <input type="text" name="addtoarray" onChange={this.changeString} />
        <input type="submit" value="submit" onSubmit={this.handleSubmit} />
      </form>
      {this.state.array}
      {this.state.array.map(item => (
        <ListEntry
          delete={this.handleDelete}
          click={this.addClickEvent}
          listItem={item}
        />
      ))}
    </div>;
  }
}

export default List;
