import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Hello from Component! {this.props.firstName} {this.props.lastName}
      </div>
    );
  }
}

export default App;
