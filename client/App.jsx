import React from "react";
import List from "./List.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: ""
    };
    this.enterFirst = this.enterFirst.bind(this);
    this.enterLast = this.enterLast.bind(this);
  }
  enterFirst(e) {
    console.log(e.target.value);
    this.setState({
      first: e.target.value
    });
  }
  enterLast(e) {
    this.setState({
      last: e.target.value
    });
  }
  render() {
    if (this.state.first === "steven" && this.state === "tu") {
      return <List />;
    } else {
      return (
        <div>
          hello from app Component
          <br />
          Frist: <input type="text" name="first" onChange={this.enterFirst} />
          <br />
          {this.state.first}
          <br />
          Last: <input type="text" name="first" onChange={this.enterLast} />
          <br />
          {this.state.first}
          {this.state.last}
        </div>
      );
    }
  }
}

export default App;
