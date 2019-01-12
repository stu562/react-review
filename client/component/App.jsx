import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.enterFirst = this.enterFirst.bind(this);
    this.state = {
      first: this.props.firstName,
      last: this.props.lastName
    };
  }

  enterFirst(e) {
    console.log(this);
    this.setState({
      first: e.target.value
    });
  }

  render() {
    return (
      <div>
        {this.state.first} {this.state.last} <br />
        First: <input name="first" onChange={this.enterFirst} />
      </div>
    );
  }
}

export default App;
