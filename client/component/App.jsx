import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: this.props.firstName,
      last: this.props.lastName
    };
  }
  render() {
    return (
      <div>
        Hello from Component! {this.state.first} {this.state.last}
      </div>
    );
  }
}

export default App;
