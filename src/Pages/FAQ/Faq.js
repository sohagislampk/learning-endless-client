import React from 'react';

const Faq = () => {
    return (
        <div>
            <div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Do you have any offline course ?
                    </div>
                    <div className="collapse-content">
                        <p>No we don't have any offline course. we are fully online based learning platform.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Should i get support from your platform ?
                    </div>
                    <div className="collapse-content">
                        <p>Yes. You will get a very resonable supprot from our platform. you need to join our discord after getting paid access.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Will you provide any certificate ?
                    </div>
                    <div className="collapse-content">
                        <p>Yes. After successfull finish of course we will take examination and then provide a digital certificate.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Can i purchase Multiple courses at a time ?
                    </div>
                    <div className="collapse-content">
                        <p>
                            yes. you can purchase as much you can effort.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;