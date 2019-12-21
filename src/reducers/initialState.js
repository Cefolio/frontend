const initialState = {
  chef: {
    isLoggedIn: false,
    name: "",
    email: "",
    location: "",
    phone: ""
  },
  displayedRecipes: [],
  isFetching: false,
  error: "",
  isEditing: false,
  isSubmitting: false,
  isDeleting: false
};

export default initialState;
