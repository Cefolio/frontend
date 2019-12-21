const initialState = {
    user: {
        isLoggedIn: false,
        name: '',
        email: ''
    },
    displayedRecipes: [],
    isFetching: false,
    error: ''
};
export default initialState;