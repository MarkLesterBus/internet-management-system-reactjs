import React from 'react';
import '../asset/css/signin.css'
import Banner from '../asset/images/banner.png';

const SignIn = () => {
    return (
        <div className='sign-in text-center'>
            <div className='form-signin w-100 m-auto text-center'>
                <form>
                    <img className="mb-4" src={Banner} alt width={300} height={300} />
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" defaultValue="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
                </form>
            </div>
        </div>


    );
}

export default SignIn;