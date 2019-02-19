import React from "react";
import Board from "./components/board.js";
import { TABLE_DATA } from "./resource/time-report.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { param: "ANY" };
  }

  changeFilterParam = name => {
    this.setState({ ...this.state, param: name });
  };

  render() {
    const { param } = this.state;
    let values = [];
    TABLE_DATA.forEach(elem => {
      if (typeof values.find(v => v === elem["Task"]) === "undefined")
        values.push(elem["Task"]);
    });

    return (
      <div>
        <nav className="navbar fixed-top navbar-dark bg-primary">
          <h1 className="navbar-brand">Task 1</h1>
          <div
            className="btn-group my-2 my-lg-0"
            role="group"
            aria-label="Basic example"
          >
            <select onChange={e => this.changeFilterParam(e.target.value)}>
              <option key="ANY" value="ANY">
                ANY
              </option>
              {values.map(v => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>
        </nav>
        <Board param={param} />
      </div>
    );
  }
}

export default App;
