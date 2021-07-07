import { ContactTypes } from "../../../constants/actionTypes/contact.types";
import axiosInstance from "../../../helpers/axiosInstance"

const getContacts =  (history) =>(dispatch)=>{

    dispatch({
        type:ContactTypes.CONTACTS_LOADING
    })

    axiosInstance(history).get("/contacts/")
    .then((res)=>{
        dispatch({
            type:ContactTypes.CONTACTS_SUCCESS,
            payload: res.data
        })
    })
    .catch((err)=>{
        dispatch({
            type:ContactTypes.CONTACTS_ERROR,
            payload: err.response?err.response.data:ContactTypes.CONNECTION_ERROR,
        })
    });    
};

export default getContacts