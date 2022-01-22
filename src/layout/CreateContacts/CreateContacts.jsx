import React,{useState,useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import CreateContactComponent from '../../container/CreateContact/create-contact.component'
import ClearCreateContact from '../../context/actions/contacts/clearcontact';
import ClearContact from '../../context/actions/contacts/clearcontact';
import CreateContact from '../../context/actions/contacts/createcontact.action';
import { GlobalContext } from '../../context/Provider';

function CreateContacts() {

    const [form, setForm] = useState({});
    const [tempfile, setTempFile] = useState();
    const { contactState } = useContext(GlobalContext)
    console.log(`contactState`, contactState)
    const { contactState:{addContact:{loading,data,error}},contactsDispatch } = useContext(GlobalContext)
    
    console.log(`loading`, loading)

    const history = useHistory()

    const onChange = (e,{name,value})=>{
        setForm({...form, [name]:value})
    }
    
    console.log(`addContact`, loading)
    const onSubmit = () =>{
        CreateContact(form)(contactsDispatch)
    }

    useEffect(()=>{
        if (data){
            history.push('/contacts')
        }

        //The below return()  is a clean up funtion that removes the data from the addContact state
        //so that when we click on the create contact button that renders this page the 
        //useEffect will run and here in useEffect we have the history,push('/contacts) that 
        //exucutes only when there is data in the state. so if we do not remove the data from the 
        //state that when we click the create contact button it will always redirect us to the 
        //homepage
        return ()=>{
            ClearCreateContact()(contactsDispatch)
        };
        
    },[data])

    const formIsHalfFilled = Object.values(form).filter((item)=> item !=="")?.length>0 && !data;

    const formInValid = !form.firstName?.length || !form.lastName?.length || !form.countryCode?.length || !form.phoneNumber?.length;


    const onImageChange = (e) =>{
        e.persist();
        const fileURL = e.target.files[0];
        setForm({...form,contactPicture:fileURL});

        if (fileURL){
            setTempFile(URL.createObjectURL(fileURL))
        }
    }

    return (
       <CreateContactComponent onChange={onChange} form={form} onSubmit={onSubmit} formInValid={formInValid} loading={loading} formIsHalfFilled={formIsHalfFilled} onImageChange={onImageChange} tempfile={tempfile}/>
    )
}

export default CreateContacts
