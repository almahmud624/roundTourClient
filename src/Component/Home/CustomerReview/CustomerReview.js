import React from 'react';

const CustomerReview = () => {
    return (
        <div>
            <div className="container mx-auto px-4 flex py-4 flex-col lg:items-center justify-between lg:flex-col">
                <div className="mb-14 xl:mb-0">
                    <h1 className="text-4xl leading-tight md:text-4xl xl:text-5xl mx-auto md:py-5 sm:py-0 font-bold text-gray-800 xl:w-2/3 lg:pr-0">What our <span className="text-blue-600">Customers</span> are saying</h1>
                </div>
                <div role="list" aria-label="Testimonials" className="xl:w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 flex-wrap justify-center items-start py-4 ">
                    <div role="listitem" className="bg-white shadow-sm p-4 xl:p-8 border-2 rounded-br-lg border-indigo-800">
                        <i className="fas fa-quote-left text-left block text-indigo-800"></i>
                        <div className="pl-4 pt-4 flex items-start justify-between">
                            <div className="mr-6">
                                <p className="xl:text-xl xl:leading-loose text-gray-600">Our guide Henery has lived in Monument Valley his hole life, so his knowledge was priceless.</p>
                                <p className="mt-4 text-base font-semibold leading-none text-gray-800">Aarna Loosse</p>
                            </div>
                            <div className="w-50 h-50 ">
                                <img src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="w-full rounded-full" alt="" />
                            </div>

                        </div>
                    </div>
                    <div role="listitem" className="bg-white shadow-sm p-4 xl:p-8 border-2 rounded-br-lg border-indigo-800">
                        <i className="fas fa-quote-left text-left block text-indigo-800"></i>
                        <div className="pl-4 pt-4 flex items-start justify-between">
                            <div className="mr-6">
                                <p className="xl:text-xl xl:leading-loose text-gray-600">Our tour of Monument Valley was great. Leo, our tour guide, pointed out all of the famous - and not so famous </p>
                                <p className="mt-4 text-base font-semibold leading-none text-gray-800">Cross Lane</p>
                            </div>
                            <div className="w-50 h-50 ">
                                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="w-full rounded-full" alt="" />
                            </div>
                        </div>
                    </div>
                    <div role="listitem" className="bg-white shadow-sm border-2 rounded-br-lg border-indigo-800 p-4 xl:p-8">
                        <i className="fas fa-quote-left text-left block text-indigo-800"></i>
                        <div className="pl-4 pt-4 flex items-start justify-between">
                            <div className="mr-6">
                                <p className="xl:text-xl xl:leading-loose text-gray-600">Well worth the visit and cost of the Navajo guided tour into the valley. Ours originated from Goulding’s Lodge.</p>
                                <p className="mt-4 text-base font-semibold leading-none text-gray-800">Mike Uora</p>
                            </div>
                            <div className="w-50 h-50 ">
                                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHVzZXIlMjBwcm9maWxlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="w-full rounded-full" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;