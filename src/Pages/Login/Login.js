import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
const Login = () => {
    const { signIn, loginProvider } = useContext(AuthContext);
    const [error, setError] = useState('');
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
            })
            .catch(error => {
                setError(error.message)
            });
    }
    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        loginProvider(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            });

    }
    return (
        <div>
            <form onSubmit={handleLogin} className='w-5/12 mx-auto'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <span className="label-text-alt" >Already Have a Account? <Link to={'/register'} className="label-text-alt link link-hover text-primary">Register</Link></span>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>

            </form>
            <p className='mt-4'>Or Login With</p>
            <div className='flex justify-center'>
                <div onClick={googleLogin} className='text-5xl m-2'><FcGoogle></FcGoogle></div>
                <div className='text-5xl m-2'><FaGithub></FaGithub></div>
            </div>
        </div>
    );
};

export default Login;