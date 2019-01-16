import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.enterFirst = this.enterFirst.bind(this);
    this.enterLast = this.enterLast.bind(this);
    this.state = {
      first: "",
      last: ""
    };
  }

  enterFirst(e) {
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
    return (
      <div>
        {this.state.first} {this.state.last} <br />
        First: <input name="first" onChange={this.enterFirst} /> <br />
        Last: <input name="last" onChange={this.enterLast} />
      </div>
    );
  }
}

export default App;
