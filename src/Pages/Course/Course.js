import React from 'react';
import { Link } from 'react-router-dom';
import { MdReviews } from 'react-icons/md'
import { AiFillLike, AiFillStar } from 'react-icons/ai'

const Course = ({ course }) => {
    const { title, photo_url, _id, about, price, rating, review, like, level, duration } = course;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-2xl border h-[500px]">
                <figure><img src={photo_url} alt="Shoes" /></figure>
                <div className=' bg-blue-500 flex justify-center items-center text-white font-bold text-xl'><p>${price}</p></div>
                <div className="card-body">
                    <h2 className="card-title mt-1">{title}</h2>
                    <div className='flex justify-between text-red-400 font-semibold my-0'> <small>Level: {level}</small>
                        <small>Duration: {duration}</small></div>
                    <p>{about.slice(0, 70)}..</p>
                    <div className='flex justify-between text-lg font-semibold'>
                        <div className='flex items-center'>
                            <AiFillStar className='text-red-400 mr-1 mt-1'></AiFillStar>
                            <p>{rating}</p>
                        </div>
                        <div className='flex items-center'>
                            <MdReviews className='text-red-400 mr-1 mt-1'></MdReviews>
                            <p>{review}</p>

                        </div>
                        <div className='flex items-center'>
                            <AiFillLike className='text-red-400 mr-1 mt-1'></AiFillLike>
                            <p>{like}</p>
                        </div>

                    </div>
                    <div className="card-actions justify-center">
                        <Link to={`/courses/${_id}`}><button className="btn btn-primary">See Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;