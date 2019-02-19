import React from "react";
import PropTypes from "prop-types";
import { TABLE_HEAD } from "../resource/table.js";
import { TABLE_DATA } from "../resource/time-report.js";

function Board(props) {
  const { param } = props;
  let index = 0;
  return (
    <div>
      <table className="table">
        <thead>
          <tr key="head">
            <th key="#">#</th>
            <th key="Full name">Full Name</th>
            {TABLE_HEAD.filter(
              e => e.name !== "First Name" && e.name !== "Last Name"
            ).map(elem => (
              <th key={elem.name}>{elem.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(param !== "ANY"
            ? TABLE_DATA.filter(elem => elem["Task"] === param)
            : TABLE_DATA
          ).map(elem => (
            <tr
              key={++index}
              className={
                typeof Object.keys(elem).find(
                  key => elem[key] === null || elem[key] === ""
                ) !== "undefined"
                  ? "row_table empty"
                  : "row_table"
              }
            >
              <td key={index + ")index"}>{index} </td>
              <td key={index + ")Full name"}>
                {elem["Last Name"] + " " + elem["First Name"]}{" "}
              </td>
              {TABLE_HEAD.filter(
                e => e.name !== "First Name" && e.name !== "Last Name"
              ).map(e => (
                <td key={index + ")" + e.name}>{elem[e.name]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Board.propTypes = {
  param: PropTypes.string.isRequired
};

export default Board;
