import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchChefs } from "../actions/actions";
import ChefCard from "../components/ChefCard";

const ChefCardContainer = props => {
  /* Need to add data to map*/
  useEffect(() => {
    props.fetchChefs();
  }, []);

  return (
    <div>
      {props.chefs.map(chef => (
        <ChefCard chef={chef} />
      ))}
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    chefs: state.chefs,
    isFetching: state.isFetching
  };
};

export default connect(mapStatetoProps, { fetchChefs })(ChefCardContainer);
