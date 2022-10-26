import React from 'react';

const Login = () => {
    return (
        <div className='w-5/12 mx-auto'>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Don't Have Account? Register</a>
                </label>
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
            </div>

        </div>
    );
};

export default Login;