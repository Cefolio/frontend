import React from "react";
import { Link } from "react-router-dom";

const ChefCard = props => {
  /* Need to add data*/
  return (
    <>
      {/* Need to update once have data */}
      <Link to={`/users/${props.chef.id}`}>
        <h1>{props.chef.name}</h1>
        <p>{props.chef.location}</p>
        <p>{props.chef.email}</p>
        <p>{props.chef.phone_number}</p>
        <p>{props.chef.bio}</p>
      </Link>
    </>
  );
};

export default ChefCard;
