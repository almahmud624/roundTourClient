import React from 'react';
import { Col } from 'react-bootstrap';
import './Blog.css'

const Blog = ({ blog }) => {
    const { blogName, img, description, tag, author } = blog;
    return (
        <div>
            <Col className="lg:w-full bg-indigo-800 text-white rounded-r-lg">
                <div>
                    <div className="relative">
                        <img src={img} className="rounded-tr-lg" alt="" />
                        <div className="bg-indigo-800 absolute top-0 left-0 rounded-br-lg">
                            <p className="text-base leading-4 py-3 px-5 text-white font-semibold  dark:text-white dark:bg-gray-900">{tag}</p>
                        </div>
                    </div>
                    <p className="text-base font-light leading-4 px-3 text-white dark:text-gray-50 mt-6">{author}</p>
                    <h1 className="text-2xl font-semibold leading-7 px-2 mt-2 text-white dark:text-gray-50">{blogName}</h1>
                    <p className="text-base leading-normal mt-4 px-3 text-gray-300 dark:text-white">{description.slice(0, 120)}</p>
                    <button className="more-btn focus:outline-none flex items-center justify-between w-72 mt-6 bg-white border-2 border-indigo-800 rounded-tr-lg  p-4 hover:border-blue-600 transition-all duration-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800">
                        <p className="text-base font-medium leading-4 text-indigo-800 dark:text-gray-900">Read more</p>

                    </button>
                </div>
            </Col>
        </div>
    );
};

export default Blog;