
import React from 'react'
import { ContactTypes } from '../../../constants/actionTypes/contact.types'

const ClearCreateContact = ()=>(dispatch)=> {
    dispatch({
        type:ContactTypes.ADD_CONTACT_CLEAR
    })
}

export default ClearCreateContact
