import { AuthTypes } from "../../../constants/actionTypes/auth.types";
import axiosInstance from "../../../helpers/axiosInstance";

export const register = ({ 
    email, password, userName:username, firstName:first_name, lastName:last_name 
}) =>(dispatch) => {
    dispatch({
        type:AuthTypes.REGISTER_LOADING,
    })
    
    console.log('FORM DATA TO SEND IN BEND', email,password,username,first_name,last_name)
    axiosInstance().post("/auth/register",{
        email, 
        password, 
        username, 
        first_name, 
        last_name,
    })
    .then(res=> 
        dispatch({
            type:AuthTypes.REGISTER_SUCCESS,
            payload: res.data,
        })    
    )
    .catch((err)=>
        dispatch({
            type:AuthTypes.REGISTER_ERROR,
            payload: err.response? err.response.data:'Could not connect to the server',
        })
    );
};