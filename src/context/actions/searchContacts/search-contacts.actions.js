import { ContactTypes } from "../../../constants/actionTypes/contact.types"



const searchContacts =  (searchText) =>(dispatch)=>{
    dispatch({
        type:ContactTypes.SEARCH_CONTACTS,
        payload:searchText
    })
};

export default searchContacts