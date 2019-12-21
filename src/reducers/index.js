import recipesByNameReducer from './recipeByName';
import reduceReducers from 'reduce-reducers';
import mainReducer from './reducers';

const reducer = reduceReducers(
    recipesByNameReducer,
    mainReducer
);

export default reducer;