import { Link } from "react-router-dom";
import { useState } from "react";
import '../scss/pages/form.scss'; 
import axios, { Axios, AxiosError } from "axios";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "./AuthContext";



const SignIn = () => {
    const navigate = useNavigate();

    const [error, setError] = useState(null)
    const [formData, setFormData] = useState<Object>( {
        email: '',
        password: '',
    });

    const { login } = useAuth();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prevData => ({...prevData, [name]: value}))
        setError(null)
    }

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    
        e.preventDefault();
        axios
            .post('http://localhost:3001/api/user/signin', formData)
            .then((response) => {
                navigate('/');
                setError(null)
                localStorage.setItem('token', response.data.token)
                login();
            })
            .catch((error) => {
                setError(error.response.data.message)
            })
       
    }
    return (
        <>
            <h1>Log in</h1>
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="email">
                    Email
                    <input type='email' name='email' onChange={handleChange}></input>
                </label>

                <label htmlFor="password">
                    Password
                    <input type='password' name='password' onChange={handleChange}></input>
                </label>
                <div className="form__buttons">
                    <button type="submit" className="form__submit">Log In</button> 
                    <Link to='/user/signup'>Create an account</Link>
                </div>
                {error && <span className="form__error">{error}!</span>}
            </form>
        </>
    )
}

export default SignIn;