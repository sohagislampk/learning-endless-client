import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa'

const Register = () => {
    const [error, setError] = useState('')
    const { createUser, loginProvider, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                form.reset();
                updateUserProfile(name, photoURL);
                navigate('/');
                console.log(user);
            })
            .catch(error => {
                setError(error.message);
            });

    }
    const googleLogin = () => {
        loginProvider()
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            });
    }
    const updateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUser(profile)
            .then(() => { })
            .catch(error => setError(error.message));
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='w-5/12 mx-auto'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" name="name" placeholder="full name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photoURL" placeholder="photo url" className="input input-bordered" />
                </div>
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
                        <span className="label-text-alt" >Already Have a Account? <Link to={'/login'} className="label-text-alt link link-hover text-primary">Login</Link></span>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>

            </form>
            <p className='mt-4'>Or Login With</p>
            <div className='flex justify-center'>
                <div onClick={googleLogin} className='text-4xl m-2'><FaGoogle></FaGoogle></div>
                <div className='text-4xl m-2'><FaGithub></FaGithub></div>
            </div>
        </div>
    );
};

export default Register;