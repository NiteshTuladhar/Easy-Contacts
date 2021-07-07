import { AuthTypes } from "../../../constants/actionTypes/auth.types";

export const Logout = (history) =>  (dispatch) =>{

    
    localStorage.removeItem('token');
    console.log('token is removed from the browser storage')
    dispatch({
        type:AuthTypes.LOGOUT_USER,
    });

    history.push('/auth/login/')
}