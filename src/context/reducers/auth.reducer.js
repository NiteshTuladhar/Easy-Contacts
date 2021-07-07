import { AuthTypes } from "../../constants/actionTypes/auth.types";

const auth=(state,action) => {
    switch(action.type){
        case AuthTypes.REGISTER_LOADING:
            case AuthTypes.LOGIN_LOADING:
            return{
                ...state,
                auth:{
                    ...state.auth,
                    loading: true,
                }
            }
        case AuthTypes.REGISTER_SUCCESS:
        case AuthTypes.LOGIN_SUCCESS:
        
            return{
                ...state,
                auth:{
                    ...state.auth,
                    loading: false,
                    data: action.payload
                }
            }
        case AuthTypes.REGISTER_ERROR:
        case AuthTypes.LOGIN_ERROR:
        
            return{
                ...state,
                auth:{
                    ...state.auth,
                    loading: false,
                    error : action.payload
                }
            }
        default:
            return state;
    }
};

export default auth;