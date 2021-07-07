import { useState, useContext, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { register } from "../../context/actions/auth/register.action";
import { GlobalContext } from "../../context/Provider";

export default () => {
    const [form, setForm] = useState({});
    const [fieldErrors, setFieldErrors] = useState({});

    const context = useContext(GlobalContext);
    const { authDispatch, authState:{auth:{loading, error,data}} } = context

    const history = useHistory();

    console.log('ERROR', error)
    console.log('DATA', data)

    useEffect(()=>{
        if(error) {
            for (const e in error){
                setFieldErrors({...fieldErrors,[e]:error[e][0]})
            }
        }
    },[error])

    useEffect(()=>{
        if(data){
            history.push('/auth/login')
        }
    },[data])

    const onChange = (e, { name, value }) => {
        setForm({ ...form, [name]: value });
    };

    const onSubmit = () =>{
        setFieldErrors({})
        register(form)(authDispatch)
    };

    return { form, onChange, onSubmit,loading, fieldErrors };
};