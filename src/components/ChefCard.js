import React from "react";
import { Link } from "react-router-dom";

const ChefCard = props => {
  /* Need to add data*/
  return (
    <>
      {/* Need to update once have data */}
      <Link to="/chef/1">
        <h1>Chef Name</h1>
        <p>Location</p>
        <p>Email</p>
        <p>Phone</p>
      </Link>
    </>
  );
};

export default ChefCard;
