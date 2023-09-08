import React, { useState } from 'react'
import './style/Form.css'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [credstate, setcredstate] = useState({ email: '', username: '', password: '', password2: '', first_name: '', last_name: '' })

    const changed = (e) => {
        setcredstate({
            ...credstate, [e.target.name]: e.target.value
        })
        console.log(e.target.name);
    }
    let navigate = useNavigate();

        const datasend = async (e) => {
            try {
            e.preventDefault();
            let response = await fetch('https://adarsh8266.pythonanywhere.com/api/accounts/register/', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: credstate.email
                    , username: credstate.username
                    , password: credstate.password
                    , password2: credstate.password2
                    , first_name: credstate.first_name
                    , last_name: credstate.last_name
                })
            })
            console.log(credstate.email);
            let data = await response.json();
            console.log(data);
            localStorage.setItem('token', data.access);
            navigate('/');
        
    } catch (error) {
        console.error(error.message);
    }
}

    return (
        <div className='form-main-container'>
            <form onSubmit={datasend}>
                <div className="form-container">
                    <label htmlFor="account" id='account'>Create account</label>
                    <input type="text" name='first_name' className="firstname" onChange={changed} placeholder='First Name' />
                    <input type="text" name='last_name' className="firstname" onChange={changed} placeholder='Last Name' />
                    <input type="text" name='username' className="username" onChange={changed} placeholder='Username' />
                    <input type="text" name='email' className="email" onChange={changed} placeholder='Email' />
                    <input type="password" name='password' className="password" onChange={changed} placeholder='Password' />
                    <input type="password" name='password2' className="confirmpassword" onChange={changed} placeholder='Confirm Password' />

                    <button type="submit" className="form-submit">Submit</button>
                    <div className="refer">
                        <a id='refer' href="#">
                            <div className="link">
                                Already have an account?
                                <a id='link' to="#">Log in</a>
                            </div>
                        </a>
                    </div>

                </div>

            </form>
        </div>
    )
}

export default Form