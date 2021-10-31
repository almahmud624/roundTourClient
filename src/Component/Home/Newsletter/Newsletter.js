import React from 'react';

const Newsletter = () => {
    return (
        <div>
            <div className="mx-auto container py-16 px-6">
                <div className="flex flex-col lg:flex-row justify-center items-center xl:space-x-44 lg:space-x-24 space-y-8 lg:space-y-0">
                    <div>
                        <img src="https://image.freepik.com/free-photo/tourist-holding-something_1368-7046.jpg" alt="" />
                    </div>
                    <div className="md:px-12 lg:px-0 flex flex-col justify-start items-start lg:w-2/5 xl:w-3/12">
                        <div className="xl:mt-4 mt-2">
                            <p className="text-4xl font-semibold leading-9 text-gray-800">Join Our <span className="text-blue-600">Newsletter</span></p>
                        </div>
                        <div className="xl:mt-6 mt-4">
                            <p className="text-base leading-6 text-gray-600">Subscribe to your newsletter to stay in to get latest news and updates.</p>
                        </div>
                        <div className="xl:mt-12 mt-6 w-full">
                            <input className="focus:outline-none focus:ring-2 focus:ring-indigo rounded focus:ring-offset-2 pb-1 border border-gray-600 bg-indigo-800 w-full h-12 sm:w-96 md:w-full lg:w-72 px-4 text-base leading-4 text-white placeholder-white" placeholder="Email address" type="email" name="input" />
                        </div>
                        <div className="xl:mt-4 mt-2 w-full">
                            <button className="hover:bg-blue-600 hover:text-white transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:ring-offset-2 h-12 w-full sm:w-96 md:w-full lg:w-72 border-2 text-gray-900 border-indigo-800 text-base font-medium leading-4 rounded">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;