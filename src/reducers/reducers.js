import initialState from './initialState';
import {
    //=== GENERAL ACTIONS ===//
  FETCH_INITIALIZE,
  POST_INITIALIZE,
  EDIT_INITIALIZE,
  EDIT_CANCEL,
  DELETE_INITIALIZE,

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

  //==== CHEF FETCH ACTIONS ====//
  FETCH_CHEF_SUCCESS,
  FETCH_CHEF_FAILURE,

  // ==== CHEF EDIT ACTIONS ====//
  EDIT_CHEF_SUCCESS,
  EDIT_CHEF_FAILURE,

  // ==== CHEF POST ACTIONS ====//
  POST_CHEF_SUCCESS,
  POST_CHEF_FAILURE,
} from '../actions/actions';

const mainReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_INITIALIZE:
      return {
        ...state,
        isFetching: true,
        error: ''
      }

      // Might need to change this
    case POST_INITIALIZE:
      return {
        ...state,
        isFetching: true,
        error: ''
      }

    case EDIT_INITIALIZE:
      return {
        ...state,
        isEditing: true,
        error: ''
      }

    case EDIT_CANCEL:
      return {
        ...state,
        isFetching: false,
        error: '',
        isEditing: false
      }
    
    case DELETE_INITIALIZE:
      return {
        ...state,
        isDeleting: true,
        error: ''
      }

    case FETCH_RECIPE_SUCCESS:
      return {
        ...state,
        displayedRecipes: action.payload,
        isFetching: false,
        error: ''
      }

    case FETCH_RECIPE_FAILURE:
      return {
        ...state,
        error: action.payload,
      }

    case EDIT_RECIPE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isEditing: false,
        isSubmitting: true,
        error: ''
      }

    case EDIT_RECIPE_FAILURE:
      return {
        ...state,
        isEditing: false,
        error: action.payload
      }

    case POST_RECIPE_SUCCESS:
      return {
        ...state,
        isEditing: false,
        isSubmitting: true,
        error: ''
      }

    case POST_RECIPE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSubmitting: false
      }

    case DELETE_RECIPE_SUCCESS:
      return {
        ...state,
        error: '',
        isDeleting: false,
        isSubmitting: true
      }

    case DELETE_RECIPE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSubmitting: false
      }

    // May need to change this
    case FETCH_CHEF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        chef: action.payload
      }

    case FETCH_CHEF_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      }

    case EDIT_CHEF_SUCCESS:
      return {
        ...state,
        error: '',
        isEditing: false,
        isSubmitting: true
      }

    case EDIT_CHEF_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSubmitting: false
      }

    case POST_CHEF_SUCCESS:
      return {
        ...state,
        error: '',
        isSubmitting: true,
        isEditing: false,
        isFetching: false
      }

    case POST_CHEF_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSubmitting: false
      }

    default:
      return state;
  }
}

export default mainReducer;