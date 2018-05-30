import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:4001"
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("shotExampleEvent", data => this.setState({ response: data }));
  }

  render() {
    const { response } = this.state;
    const fixedDate = new Date(response).toLocaleTimeString()
    return (
      <main>
        <div style={{ textAlign: "center" }}>
          {response
            ? <p>
                the curret time is: {fixedDate}
              </p>
            : <p>Loading...</p>}
        </div>
        <div style={{ textAlign: "center" }}>
          {response?
          <p>
              the raw response fom the server is:  {response}
          </p> :''}
        </div>
      </main>
    );
  }
}

export default App;
