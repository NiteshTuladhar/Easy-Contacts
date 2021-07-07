import { AuthTypes } from "../../../constants/actionTypes/auth.types";
import axiosInstance from "../../../helpers/axiosInstance";


export const login = ({ 
   password, userName:username,
}) =>(dispatch) => {
    dispatch({
        type:AuthTypes.LOGIN_LOADING,
    })

    axiosInstance().post("/auth/login",{
        
        password, 
        username, 
        
    })
    .then((res)=> {

        dispatch({
            type:AuthTypes.LOGIN_SUCCESS,
            payload: res.data,
        })  
        
        localStorage.token = res.data.token;
    })
    .catch((err)=>{
        dispatch({
            type:AuthTypes.LOGIN_ERROR,
            payload: err.response? err.response.data:'Could not connect to the server',
        })}
    );
};