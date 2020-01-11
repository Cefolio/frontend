import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRecipes } from "../actions/actions";
import RecipeCard from "../components/RecipeCard";

const RecipeCardContainer = props => {
  /* Need to add data to map*/
  useEffect(() => {
    props.fetchRecipes(props.id);
  }, []);

  return (
    <div>
      {props.recipes &&
        props.recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    recipes: state.displayedRecipes,
    isFetching: state.isFetching
  };
};

export default connect(mapStatetoProps, { fetchRecipes })(RecipeCardContainer);
