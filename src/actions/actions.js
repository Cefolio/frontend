import { axiosWithAuth } from "../utils/axiosWithAuth";
import { toast } from "react-toastify";

//=== GENERAL ACTIONS ===//
export const FETCH_INITIALIZE = "FETCH_INITIALIZE";
export const POST_INITIALIZE = "POST_INITIALIZE";
export const EDIT_INITIALIZE = "EDIT_INITIALIZE";
export const EDIT_CANCEL = "EDIT_CANCEL";
export const DELETE_INITIALIZE = "DELETE_INITIALIZE";

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

//==== CHEF FETCH ACTIONS ====//
export const FETCH_CHEF_SUCCESS = "FETCH_CHEF_SUCCESS";
export const FETCH_CHEF_FAILURE = "FETCH_CHEF_FAILURE";

// ==== CHEF EDIT ACTIONS ====//
export const EDIT_CHEF_SUCCESS = "EDIT_CHEF_SUCCESS";
export const EDIT_CHEF_FAILURE = "EDIT_CHEF_FAILURE";

// ==== CHEF POST ACTIONS ====//
export const POST_CHEF_SUCCESS = "POST_CHEF_SUCCESS";
export const POST_CHEF_FAILURE = "POST_CHEF_FAILURE";

export const addChef = chefID => dispatch => {
  dispatch({ typs: POST_INITIALIZE });

  axiosWithAuth()
    .post(`/chef/${chefID}`)
    ,then(res => {
      dispatch({
        type: POST_CHEF_SUCCESS,
        payload: res.data.chef
      })
    })
    .catch(err => {
      dispatch({
        type: POST_CHEF_FAILURE,
        payload: { err, message: err.message }
      })
      toast.error(err.message);
    })
}

// Added for Nav
export const fetchChef = chefID => dispatch => {
  dispatch({ type: FETCH_INITIALIZE });

  axiosWithAuth()
    .get(`/dashboard/${chefID}`)
    .then(res => {
      // update based on documentation
      dispatch({
        type: FETCH_CHEF_SUCCESS,
        payload: res.data.chef
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

export const initializeEditChef = () => dispatch => {
  dispatch({ type: EDIT_INITIALIZE });
};

export const cancelEditChef = () => dispatch => {
  dispatch({ type: EDIT_CANCEL });
};

export const editChef = chefID => dispatch => {
    // revist when backend if complete
  axiosWithAuth()
    .put(`/chef/${chefID}`)
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

export const fetchRecipes = chefID => dispatch => {
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

export const initializeEditRecipe = () => dispatch => {
  dispatch({ type: EDIT_INITIALIZE });
};

export const cancelEditRecipe = () => dispatch => {
  dispatch({ type: EDIT_CANCEL });
};

export const editRecipe = recipeID => dispatch => {
    // revist when backend if complete
  axiosWithAuth()
    .put(`recipe/${recipeID}`)
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
    .delete(`/recipe/${recipeID}`)
    .then(res => {
      dispatch({
        type: DELETE_RECIPE_SUCCESS
      })
    })
    .catch(err => {
      dispatch({
        type: DELETE_RECIPE_FAILURE,
        payload: { err, message: err.message }
      })
      toast.error(err.message);
    })
}