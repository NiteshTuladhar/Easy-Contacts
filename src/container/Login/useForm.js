import { useState, useContext, useEffect } from "react";
import { useHistory  } from 'react-router-dom';
import { login } from "../../context/actions/auth/login.action";
import { GlobalContext } from "../../context/Provider";

export default () => {
    const [form, setForm] = useState({});

    const context = useContext(GlobalContext);
    const { authDispatch, authState:{auth:{loading, error,data}} } = context

    const history = useHistory();

    useEffect(()=>{
        if(data){
            history.push('/')
        }
    })

    const onChange = (e, { name, value }) => {
        setForm({ ...form, [name]: value });
    };

    const onSubmit = () =>{
        login(form)(authDispatch)
    };

    return { form, onChange, onSubmit,loading,error };
};