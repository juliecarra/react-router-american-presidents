import React, { Component } from "react";
import presidents from "../../presidents";
import { Link } from "react-router-dom";

class ListPresidents extends Component {
  render() {
    return (
      <div>
        <h1>List of American Presidents</h1>
        <table className="table-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {presidents.map((president, i) => (
              <tr>
                <td key={i}>{president.number}</td>
                <td key={i}>{president.president}</td>
                <td>
                  <Link to={"/president-detail/" + president.number}>
                    Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListPresidents;
