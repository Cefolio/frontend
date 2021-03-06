import initialState from "./initialState";
import {
  //=== GENERAL ACTIONS ===//
  FETCH_INITIALIZE,
  POST_INITIALIZE,
  DELETE_INITIALIZE,

  //==== RECIPES FETCH ACTIONS ====//
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILURE,

  //==== RECIPE FETCH ACTIONS ====//
  FETCH_RECIPE_SUCCESS,
  FETCH_RECIPE_FAILURE,

  // ==== RECIPE EDIT ACTIONS ====//
  EDIT_RECIPE_SUCCESS,
  EDIT_RECIPE_FAILURE,

  // ==== RECIPE POST ACTIONS ====//
  POST_RECIPE_SUCCESS,
  POST_RECIPE_FAILURE,

  // ==== RECIPE DELETE ACTIONS ====//
  DELETE_RECIPE_SUCCESS,
  DELETE_RECIPE_FAILURE,

  //==== CHEFS FETCH ACTIONS ====//
  FETCH_CHEFS_SUCCESS,
  FETCH_CHEFS_FAILURE,

  //==== CHEF FETCH ACTIONS ====//
  FETCH_CHEF_SUCCESS,
  FETCH_CHEF_FAILURE,

  // ==== CHEF EDIT ACTIONS ====//
  EDIT_CHEF_SUCCESS,
  EDIT_CHEF_FAILURE,

  // ==== CHEF POST ACTIONS ====//
  POST_CHEF_SUCCESS,
  POST_CHEF_FAILURE,

  // === ADD RECIPE === //
  ADD_RECIPE_SUCCESS,
  ADD_RECIPE_FAIL,

  // === LOGIN === //
  LOGIN_SUCCESS,

  // === LOGOUT == //
  LOGOUT
} from "../actions/actions";

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INITIALIZE:
      return {
        ...state,
        isFetching: true,
        error: ""
      };

    // Might need to change this
    case POST_INITIALIZE:
      return {
        ...state,
        isFetching: true,
        error: ""
      };

    case DELETE_INITIALIZE:
      return {
        ...state,
        isDeleting: true,
        error: ""
      };

    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        displayedRecipes: action.payload,
        isFetching: false,
        error: ""
      };

    case FETCH_RECIPES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    case FETCH_RECIPE_SUCCESS:
      return {
        ...state,
        recipe: action.payload,
        isFetching: false,
        error: ""
      };

    case FETCH_RECIPE_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    case EDIT_RECIPE_FAILURE:
      return {
        ...state,
        isEditing: false,
        error: action.payload
      };

    case POST_RECIPE_SUCCESS:
      return {
        ...state,
        isEditing: false,
        isSubmitting: true,
        error: ""
      };

    case POST_RECIPE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSubmitting: false
      };

    case DELETE_RECIPE_SUCCESS:
      return {
        ...state,
        error: "",
        isDeleting: false,
        isSubmitting: true
      };

    case DELETE_RECIPE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSubmitting: false
      };

    case FETCH_CHEFS_SUCCESS:
      return {
        ...state,
        chefs: action.payload,
        isFetching: false
      };

    case FETCH_CHEFS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    case FETCH_CHEF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        chef: action.payload
      };

    case FETCH_CHEF_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    case EDIT_CHEF_SUCCESS:
      return {
        ...state,
        error: "",
        isEditing: false,
        isSubmitting: true
      };

    case EDIT_CHEF_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSubmitting: false
      };

    case POST_CHEF_SUCCESS:
      return {
        ...state,
        error: "",
        isSubmitting: false,
        chef: {
          id: action.payload.id[0],
          username: action.payload.user.username,
          name: action.payload.user.name,
          password: action.payload.user.password,
          email: action.payload.user.email,
          phone_number: action.payload.user.phone_number,
          location: action.payload.user.location,
          bio: action.payload.user.bio
        },
        isLoggedIn: true
      };

    case POST_CHEF_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSubmitting: false
      };

    case ADD_RECIPE_SUCCESS:
      return {
        ...state,
        displayedRecipes: action.payload,
        error: ""
      };

    case ADD_RECIPE_FAIL:
      return {
        ...state,
        error: action.payload
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        chef: action.payload,
        isLoggedIn: true
      };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      };

    default:
      return state;
  }
};

export default mainReducer;
