import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";
import { toast } from "react-toastify";
// import { FETCH_RECIPES_BY_NAME_SUCCESS, FETCH_RECIPES_BY_NAME_FAIL } from ".";

//=== GENERAL ACTIONS ===//
export const FETCH_INITIALIZE = "FETCH_INITIALIZE";
export const POST_INITIALIZE = "POST_INITIALIZE";
export const DELETE_INITIALIZE = "DELETE_INITIALIZE";

//==== RECIPES FETCH ACTIONS ====//
// return list of recipes from chef
// recipes/usr/:id endpoint
export const FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS";
export const FETCH_RECIPES_FAILURE = "FETCH_RECIPES_FAILURE";

//==== RECIPE FETCH ACTIONS ====//
export const FETCH_RECIPE_SUCCESS = "FETCH_RECIPE_SUCCESS";
export const FETCH_RECIPE_FAILURE = "FETCH_RECIPE_FAILURE";

// ==== RECIPE EDIT ACTIONS ====//
export const EDIT_RECIPE_SUCCESS = "EDIT_RECIPE_SUCCESS";
export const EDIT_RECIPE_FAILURE = "EDIT_RECIPE_FAILURE";

// ==== RECIPE POST ACTIONS ====//
export const POST_RECIPE_SUCCESS = "POST_RECIPE_SUCCESS";
export const POST_RECIPE_FAILURE = "POST_RECIPE_FAILURE";

// ==== RECIPE DELETE ACTIONS ====//
export const DELETE_RECIPE_SUCCESS = "DELETE_RECIPE_SUCCESS";
export const DELETE_RECIPE_FAILURE = "DELETE_RECIPE_FAILURE";

//==== CHEFS FETCH ACTIONS ====//
// return list of all chefs
// /users endpoint
export const FETCH_CHEFS_SUCCESS = "FETCH_CHEFS_SUCCESS";
export const FETCH_CHEFS_FAILURE = "FETCH_CHEFS_FAILURE";

//==== CHEF FETCH ACTIONS ====//
// users/:id endpoint
export const FETCH_CHEF_SUCCESS = "FETCH_CHEF_SUCCESS";
export const FETCH_CHEF_FAILURE = "FETCH_CHEF_FAILURE";

// ==== CHEF EDIT ACTIONS ====//
export const EDIT_CHEF_SUCCESS = "EDIT_CHEF_SUCCESS";
export const EDIT_CHEF_FAILURE = "EDIT_CHEF_FAILURE";

// ==== CHEF POST ACTIONS ====//
export const POST_CHEF_SUCCESS = "POST_CHEF_SUCCESS";
export const POST_CHEF_FAILURE = "POST_CHEF_FAILURE";

// === CHEF LOGIN ===//
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const registerUser = (user, props) => dispatch => {
  dispatch({ typs: POST_INITIALIZE });

  axiosWithAuth()
    .post(`/users/registration`, user)
    .then(res => {
      dispatch({
        type: POST_CHEF_SUCCESS
      });
      console.log("Register:", res);
      props.history.push("/login");
    })
    .catch(err => {
      dispatch({
        type: POST_CHEF_FAILURE,
        payload: { err, message: err.message }
      });
      console.log("Error: ", err);
      toast.error(err.message);
    });
};

// Added for Nav
export const fetchChef = chefID => dispatch => {
  dispatch({ type: FETCH_INITIALIZE });

  axiosWithAuth()
    .get(`/users/${chefID}`)
    .then(res => {
      // update based on documentation
      dispatch({
        type: FETCH_CHEF_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_CHEF_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};

export const fetchChefs = () => dispatch => {
  dispatch({ type: FETCH_INITIALIZE });

  axios
    .get("https://chefmode.herokuapp.com/users")
    .then(res => {
      dispatch({
        type: FETCH_CHEFS_SUCCESS,
        payload: res.data
      });
      console.log(res);
    })
    .catch(err => {
      dispatch({
        type: FETCH_CHEFS_FAILURE,
        payload: err.message
      });
      toast.error(err.message);
    });
};

export const editChef = chefID => dispatch => {
  // revist when backend if complete
  axiosWithAuth()
    .put(`/users/${chefID}`)
    .then(res => {
      dispatch({
        type: EDIT_CHEF_SUCCESS,
        payload: res.data.chef
      });
    })
    .catch(err => {
      dispatch({
        type: EDIT_CHEF_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};

export const fetchRecipe = chefID => dispatch => {
  dispatch({ type: FETCH_INITIALIZE });

  axiosWithAuth()
    .get(`/recipes/${chefID}`)
    .then(res => {
      // update based on documentation
      dispatch({
        type: FETCH_RECIPE_SUCCESS,
        payload: res.data.recipes
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_RECIPE_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};

export const fetchRecipes = userID => dispatch => {
  dispatch({ type: FETCH_INITIALIZE });

  axios
    .get(`/recipes/usr/${userID}`)
    .then(res => {
      console.log("Recipes:", res);
      // dispatch({
      //   type: FETCH_RECIPES_SUCCESS,
      //   payload: res.data.recipes
      // });
    })
    .catch(err => {
      dispatch({
        type: FETCH_RECIPES_FAILURE,
        payload: err.message
      });
      toast.error(err.message);
    });
};

export const editRecipe = recipeID => dispatch => {
  axiosWithAuth()
    .put(`recipes/${recipeID}`)
    .then(res => {
      dispatch({
        type: EDIT_RECIPE_SUCCESS,
        payload: res.data.recipes
      });
    })
    .catch(err => {
      dispatch({
        type: EDIT_RECIPE_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};

export const deleteRecipe = recipeID => dispatch => {
  dispatch({ type: DELETE_INITIALIZE });

  axiosWithAuth()
    .delete(`/recipes/${recipeID}`)
    .then(res => {
      dispatch({
        type: DELETE_RECIPE_SUCCESS
      });
    })
    .catch(err => {
      dispatch({
        type: DELETE_RECIPE_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};

export const login = (user, props) => dispatch => {
  dispatch({ type: LOGIN_START });

  axiosWithAuth()
    // Might need to edit endpoint
    .post("/users/login", user)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      localStorage.setItem("token", res.data.token);
      props.history.push("/dashboard");
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAIL,
        payload: { err, message: err.message }
      });
      console.error(err);
    });
};
