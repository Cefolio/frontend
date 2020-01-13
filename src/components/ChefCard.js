import React from "react";
import { Link } from "react-router-dom";
import "../css/index.scss";

const ChefCard = props => {
  /* Need to add data*/
  return (
    <div className="chef-card">
      <Link to={`/chef/${props.chef.id}`} className="chef-card-font">
        <h2 className="chef-card-name">{props.chef.name}</h2>
        <p className="chef-card-font">{props.chef.location}</p>
        <p className="chef-card-font">{props.chef.email}</p>
        <p className="chef-card-font">{props.chef.phone_number}</p>
        <p className="chef-card-font">{props.chef.bio}</p>
      </Link>
    </div>
  );
};

export default ChefCard;
