import React,{ createContext, useReducer } from 'react';
import authinitialState from './initialstates/authinitialState';
import contactinitialState from './initialstates/contactinitialState';
import auth from './reducers/auth.reducer';
import contacts from './reducers/contacts';


export const GlobalContext = createContext({});

export const GlobalProvider = ({children}) => {
    const [authState,authDispatch] = useReducer(auth,authinitialState);
    const [contactState,contactsDispatch] = useReducer(contacts,contactinitialState);

    return (

        <GlobalContext.Provider
            value={{
                authState,
                authDispatch,
                
                contactState,
                contactsDispatch
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
};

