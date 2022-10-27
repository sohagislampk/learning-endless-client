import React from 'react';

const Blog = () => {
    return (
        <div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What Is CORS ?
                </div>
                <div className="collapse-content">
                    <p>Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).</p>
                    <p>For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Why are you using firebase? What other options do you have to implement authentication?
                </div>
                <div className="collapse-content">
                    <p>Indeed, Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.You might also want to consider leveraging this tool if you eventually wish to host and manage your app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration.</p>
                    <p>
                        As a Google Cloud service, it also gives you access to other Google products and features, like Google Drive and Sheets. For instance, you can import dummy data from Google Sheets and use it temporarily to serve your app.With Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others. And if you want to use a pre-built authentication UI, you have it at your disposal as well.
                    </p>
                    <p>All of these can save you a significant amount of development cost, as you don't need to pay as high as developing from scratch. Firebase pricing is equally flexible. Although there are pay-as-you-go services, you can start on a free plan and use primary features if your app is still at its prime.

                        Firebase is a good choice if you want to deploy a working product on the cloud rapidly. Plus, as mentioned, you might want to try it out if you need a backend but don't have a backend development background.</p>
                    <p>
                        Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does the private route work?
                </div>
                <div className="collapse-content">
                    <p>PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. Additionally, we can define the logic of isLogin utility function separately in utils folder.</p>
                    <p>
                        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.

                        If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is Node? How does Node work?
                </div>
                <div className="collapse-content">
                    <p>
                        Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    </p>
                    <p>Node is completely event-driven. Basically the server consists of one thread processing one event after another.A new request coming in is one kind of event. The server starts processing it and when there is a blocking IO operation, it does not wait until it completes and instead registers a callback function. The server then immediately starts to process another event (maybe another request). When the IO operation is finished, that is another kind of event, and the server will process it (i.e. continue working on the request) by executing the callback as soon as it has time.So the server never needs to create additional threads or switch between threads, which means it has very little overhead. If you want to make full use of multiple hardware cores, you just start multiple instances of node.js</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;