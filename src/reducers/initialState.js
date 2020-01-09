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
  recipe: {
    id: "",
    title: "",
    meal_type: "",
    img: "",
    ingredients: "",
    instructions: "",
    user_id: ""
  },
  isFetching: false,
  error: "",
  isSubmitting: false,
  isDeleting: false,
  isLoggedIn: false
};

export default initialState;
