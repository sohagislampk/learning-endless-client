import React from 'react';

const Register = () => {
    return (
        <div className='w-5/12 mx-auto'>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Full Name</span>
                </label>
                <input type="text" placeholder="full name" className="input input-bordered" />
            </div>
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
                    <a href="#" className="label-text-alt link link-hover">Already Have a Account? Login</a>
                </label>
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
            </div>

        </div>
    );
};

export default Register;