import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPdf from 'react-to-pdf';
import { GrDocumentPdf } from 'react-icons/gr'
import { MdPeopleAlt, MdReviews } from 'react-icons/md'
import { AiFillLike, AiFillStar } from 'react-icons/ai'

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { title, photo_url, description, _id, instructor, instructor_photo, skills, rating, review, like, students, duration, level } = courseDetails;
    const ref = React.createRef();
    return (
        <div ref={ref}>
            <div className='text-center my-4'>
                <div className='lg:flex items-center justify-between mb-6'>
                    <h1 className='text-3xl font-semibold mt-6'>Course : {title}</h1>
                    <ReactToPdf targetRef={ref} filename={title}>
                        {({ toPdf }) => (
                            <div className='flex justify-center mt-4 lg:justify-end'><GrDocumentPdf onClick={toPdf} className="text-5xl"></GrDocumentPdf></div>
                        )}
                    </ReactToPdf>
                </div>
                <img src={photo_url} alt="" />
                <div className='lg:flex justify-between items-center my-4'>
                    <div className='lg:flex items-center my-4'>
                        <div className="avatar">
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-2">
                                <img src={instructor_photo} alt="" />
                            </div>
                        </div>
                        <p className='text-2xl font-bold'>{instructor}</p>
                    </div>
                    <p className='text-2xl font-semibold' >Level: {level}</p>
                    <p className='text-2xl font-semibold' >Duration: {duration}</p>

                </div>
                <h3 className='w-full'>Description : {description}</h3>
                <p className='lg:text-xl my-6'>Skills : <strong>{skills}</strong></p>
                <div className='flex justify-between text-lg font-semibold my-4'>
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
                    <div className='flex items-center'>
                        <MdPeopleAlt className='text-red-400 mr-1 mt-1'></MdPeopleAlt>
                        <p>{students}</p>
                    </div>

                </div>

                <Link to={`/checkout/${_id}`}><button className='btn btn-primary my-4'>Get Premium Access</button></Link>
            </div>
        </div>
    );
};

export default CourseDetails;