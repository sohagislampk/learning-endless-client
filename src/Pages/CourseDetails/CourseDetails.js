import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPdf from 'react-to-pdf';
const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { title, photo_url, description, _id } = courseDetails;
    const ref = React.createRef();
    return (
        <div>
            <ReactToPdf targetRef={ref} filename={title}>
                {({ toPdf }) => (
                    <button className='btn btn-primary' onClick={toPdf}>Generate pdf</button>
                )}
            </ReactToPdf>
            <div ref={ref}>
                <img src={photo_url} alt="" />
                <h1 className='text-2xl font-semibold'>{title}</h1>
                <h3>Description : {description}</h3>
                <Link to={`/checkout/${_id}`}><button className='btn btn-primary'>Get Premium Access</button></Link></div>
        </div>
    );
};

export default CourseDetails;