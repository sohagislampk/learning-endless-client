import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa'


const Login = () => {
    const { signIn, loginProvider, setLoading } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }
    const googleLogin = () => {
        loginProvider(provider)
            .then(result => {
                const user = result.user;
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            })


    }
    const gitLogin = () => {
        loginProvider(gitProvider)
            .then(result => {
                const user = result.user;
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            })


    }
    return (
        <div>
            <form onSubmit={handleLogin} className='lg:w-5/12 mx-auto'>
                <h1 className='text-2xl font-semibold text-center my-4'>Login Here</h1>
                <p className='text-red-600'>{error}</p>
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
            <p className='mt-4 text-center'>Or Login With</p>
            <div className='flex justify-center'>
                <div onClick={googleLogin} className='text-4xl m-2'><FaGoogle></FaGoogle></div>
                <div onClick={gitLogin} className='text-4xl m-2'><FaGithub></FaGithub></div>
            </div>
        </div>
    );
};

export default Login;