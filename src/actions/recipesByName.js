import { axiosWithAuth } from '../utils/axiosWithAuth.js'
import {
    FETCH_RECIPES_BY_NAME_INITIALIZE,
    FETCH_RECIPES_BY_NAME_SUCCESS,
    FETCH_RECIPES_BY_NAME_FAIL
} from './index';
import { toast } from 'react-toastify';

export const fetchRecipesByName = data => dispatch => {
    dispatch({ type:  FETCH_RECIPES_BY_NAME_INITIALIZE });
    return axiosWithAuth()
        .post(data)
        .then(res => {
            dispatch({
                type: FETCH_RECIPES_BY_NAME_SUCCESS,
                payload: res.data.cities
            });
            return true;
        })
        .catch(err => {
            dispatch({
                type: FETCH_RECIPES_BY_NAME_FAIL,
                payload: {err, message: err.message }
            });
            toast.error(err.message);
            return false;
        });
};