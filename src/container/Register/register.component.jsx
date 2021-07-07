import React,{ useEffect } from 'react';
import { Link } from 'react-router-dom';
import RegisterUI from '../../layout/Register/register.form';
import useForm from '../Register/useForm';

function RegisterComponent() {

    useEffect(()=>{
        
    },[]); 

    return (
        <div>
            <RegisterUI userform={useForm()}/>
            <Link to='/auth/login/'>Login Here</Link>
        </div>
    )
}

export default RegisterComponent
