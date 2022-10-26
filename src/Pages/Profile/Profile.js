import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName);
    const photoURL = useRef(user?.photoURL);
    console.log(user);
    const handleSubmit = event => {
        event.preventDefault();
    }

    const handleNameChange = event => {
        setName(event.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='w-5/12 mx-auto'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input onChange={handleNameChange} defaultValue={name} type="text" name="name" placeholder="full name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" ref={photoURL} defaultValue={user?.photoURL} name="photoURL" placeholder="photo url" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" readOnly defaultValue={user?.email} name="email" placeholder="email" className="input input-bordered" />
                </div>

                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">Update Profile</button>
                </div>

            </form>
        </div>
    );
};

export default Profile;