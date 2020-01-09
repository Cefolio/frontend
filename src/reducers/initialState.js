const initialState = {
  chefs: [],
  chef: {
    id: "",
    username: "",
    name: "",
    password: "",
    email: "",
    phone_number: "",
    location: "",
    bio: ""
  },
  displayedRecipes: [],
  isFetching: false,
  error: "",
  isSubmitting: false,
  isDeleting: false,
  isLoggedIn: false
};

export default initialState;
