import React from "react";
import ReactDOM from "react-dom";
//import App from "./component/App.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>Hello from React!</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
