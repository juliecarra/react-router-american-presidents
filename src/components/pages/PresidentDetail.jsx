import React, { Component } from "react";
import { Link } from "react-router-dom";
import presidents from "../../presidents";

class PresidentDetail extends Component {
  render() {
    let number = Number(this.props.match.params.number); // Because of <Route path='/.../:number' component={...}/>

    let president = presidents.find(p => p.number === number); //Find a details match according to the number
    if (!president) {
      return (
        <div>Oops, there is no president {this.props.match.params.number}</div>
      );
    }
    return (
      <div>
        <h1>President Detail</h1>
        <div className="details">
          <strong>birth year</strong>: {president.birth_year}
          <strong>death year</strong>: {president.death_year}
          <strong>took office</strong>: {president.took_office}
          <strong>left office</strong>: {president.left_office}
          <strong>party</strong>: {president.party}
        </div>
        <Link to="/list-presidents">Back</Link>
      </div>
    );
  }
}

export default PresidentDetail;
