import React,{useContext,useEffect} from 'react'
import { GlobalContext } from '../../context/Provider'
import  getContacts  from '../../context/actions/contacts/contacts.action';
import ContactsListUI from '../../layout/Contacts/contact.list';

function ContactsComponent() {
    const { contactState,contactsDispatch } = useContext(GlobalContext)

    const {
       contacts:{contacts},
      } = contactState
      
    useEffect(()=>{
       
         getContacts()(contactsDispatch)

    },[])

    console.log('contactState',contactState )

    return (
       <ContactsListUI state={contactState}/>
    )
}

export default ContactsComponent;
