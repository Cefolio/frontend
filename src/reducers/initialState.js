const initialState = {
  chef: {
    id: "",
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
