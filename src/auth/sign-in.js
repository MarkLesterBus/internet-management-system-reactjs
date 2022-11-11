import React, { useState } from 'react';
import '../asset/css/signin.css'
import Banner from '../asset/images/banner.png';

import { useSelector, useDispatch } from 'react-redux'
import { setUser, setToken, setLogged } from '../store/user';


import AuthServive from '../services/AuthService';
import { Alert, Button } from 'react-bootstrap';

const SignIn = () => {
    const [show, setShow] = useState(false);

    const user = useSelector((state) => state.user.user)
    const token = useSelector((state) => state.user.token)
    const isLogged = useSelector((state) => state.user.isLogged)
    const dispatch = useDispatch()


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const SignIn = (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password
        };

        AuthServive.sign_in(data)
            .then(res => {
                if (!res.data) {
                    dispatch(setLogged(false));
                    dispatch(setToken({}));
                    dispatch(setUser({}));
                    dispatch(setLogged(true));
                } else {
                    dispatch(setToken(res.data));

                    const config = {
                        headers: {
                            Authorization: `Bearer ${res.data.access_token}`,
                        },
                    }

                    AuthServive.logged_user(config)
                        .then(res => {
                            dispatch(setUser(res.data))
                        })
                        .catch(e => {
                            console.log(e);
                        });
                }

            })
            .catch(e => {
                setShow(true);

                console.log(e);
            });
    };


    return (
        <div className='container'>

            <div className='form-signin w-100 m-auto text-center'>
                <form className='mt-5'>
                    <img className="mb-4" src={Banner} alt="" width={250} height={250} dismissable />
                    <Alert variant={'danger'} show={show} onClose={() => setShow(false)} dismissible>
                        <p>
                            Login Failed, Unauthorized.
                        </p>
                    </Alert>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" value={email} onChange={onChangeEmail} placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" value={password} onChange={onChangePassword} placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" defaultValue="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" onClick={SignIn} >Sign in</button>
                    <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
                </form>
            </div>

        </div>





    );
}

export default SignIn;