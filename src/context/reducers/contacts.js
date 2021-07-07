import { AuthTypes } from "../../constants/actionTypes/auth.types";
import { ContactTypes } from "../../constants/actionTypes/contact.types";

const contacts=(state,action) => {
    switch(action.type){
        case ContactTypes.CONTACTS_LOADING:
            return{
                ...state,
                contacts:{
                    ...state.contacts,
                    loading:true
                }
            }

        case ContactTypes.CONTACTS_SUCCESS:
            return{
                ...state,
                contacts:{
                    loading:false,
                    contacts:action.payload,
                }
            }

        case ContactTypes.CONTACTS_ERROR:
            return{
                ...state,
                contacts:{
                    ...state.contacts,
                    loading:true,
                    error:action.payload
                }
            }
        
        case AuthTypes.LOGOUT_USER:
            return{
                ...state,
                contacts:{
                    loading: false,
                    error:null,
                    contacts:[],
                },
            }
        
        case ContactTypes.ADD_CONTACT_LOADING:
            return{
                ...state,
                addContact:{
                    ...state.addContact,
                    loading: true,
                    error:null,
                },
            }

        case ContactTypes.ADD_CONTACT_SUCCESS:

            return{
                ...state,
                addContact:{
                    ...state.addContact,
                    loading: false,
                    data: action.payload
                },
                contacts:{
                    ...state.contacts,
                    loading:true,
                    contacts:[action.payload,...state.contacts.contacts]
                }
            }
        
        case ContactTypes.ADD_CONTACT_ERROR:

            return{
                ...state,
                addContact:{
                    ...state.addContact,
                    loading: false,
                },
            }

        case ContactTypes.ADD_CONTACT_CLEAR:

            return{
                ...state,
                addContact:{
                    ...state.addContact,
                    error:null,
                    loading: false,
                    data: null
                },
            }

        default:
            return state;
    }
};

export default contacts;