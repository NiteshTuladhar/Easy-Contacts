import React,{ useEffect } from 'react';
import LoginUI from '../../layout/Login/login.form';
import useForm from './useForm';

function RegisterComponent() {

    useEffect(()=>{
        
    },[]); 

    return (
        <div>
            <LoginUI userform={useForm()}/>
            
        </div>
    )
}

export default RegisterComponent
