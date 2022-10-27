import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const CheckOut = () => {
    const { user } = useContext(AuthContext);
    const checkout = useLoaderData();
    return (
        <div>
            <h1 className='text-xl lg:font-semibold my-4 text-center' >Course : {checkout.title}</h1>
            <p className='text-xl text-center font-semibold'>Price : ${checkout.price}</p>
            <form className='lg:w-5/12 mx-auto'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input defaultValue={user.displayName} type="text" name="name" placeholder="full name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" readOnly defaultValue={user?.email} name="email" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Mobile Number</span>
                    </label>
                    <input type="tel" name="tel" placeholder="mobile number" className="input input-bordered" />
                </div>

                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">Check Out</button>
                </div>

            </form>
        </div>
    );
};

export default CheckOut;