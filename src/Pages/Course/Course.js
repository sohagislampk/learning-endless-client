import React from 'react';

const Course = ({ course }) => {
    const { title, photo_url, } = course;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={photo_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;