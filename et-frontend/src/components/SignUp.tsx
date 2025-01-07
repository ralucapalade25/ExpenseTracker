import { useState } from "react";
import axios from "axios";
import { UserInfo } from "../models/UserInfo.model";
import { useNavigate } from 'react-router-dom';
import '../scss/pages/form.scss'; 

const SignUp = () => {
        const [error, setError] = useState('')
        const [formData, setFormData] = useState<UserInfo>( {
            name: '',
            email: '',
            password: '',
            username: ''
        });

        const navigate = useNavigate();

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const {name, value} = e.target;
            setFormData(prevData => ({...prevData, [name]: value}))

            if (value.trim() === "") {
                setError('This field is required.');
              } else {
                setError('');
              }
        }
    
        const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
            e.preventDefault();
            try {
                const response = await axios.post('http://localhost:3001/api/user/signup', formData)
                navigate('/user/signin');

            } catch (error) {
                console.error(error)  
                setError('This field is required.');
            }
        }
    
    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="name">
                    Name
                    <input type='text' name='name' onChange={handleChange} placeholder="Enter your name..." className="form__name"></input>
                    {error && <span className="form__error">{error}</span>}
                </label>

                <label htmlFor="username">
                    Username
                    <input type='text' name='username' onChange={handleChange} placeholder="Enter your username..."  className="form__username"></input>
                    {error && <span className="form__error">{error}</span>}
                </label>

                <label htmlFor="email">
                    Email
                    <input type='email' name='email' onChange={handleChange} placeholder="Enter your email..."  className="form__email"></input>
                    {error && <span className="form__error">{error}</span>}
                </label>

                <label htmlFor="password">
                    Password
                    <input type='password' name='password' onChange={handleChange} placeholder="Enter your password..."  className="form__password"></input>
                    {error && <span className="form__error">{error}</span>}
                </label>
                <button type='submit' className="form__submit">Sign Up</button>
                {error && <span className="form__error">All fields must be filled in.</span> }
            </form>

        </>
        
    )
}

export default SignUp;