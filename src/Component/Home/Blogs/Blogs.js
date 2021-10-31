import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useBlogs from '../../../hooks/useBlogs';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs] = useBlogs();
    return (
        <Container id="blogs" className="py-10">
            <h1 className="my-4 text-5xl font-bold">Read Our <span className="text-blue-600">Latest Articles</span></h1>
            <p className="text-lg text-gray-600 pb-2">Stay Updated with Our Latest News and Blog</p>
            <div className=" w-24 sm:border-b-0 md:border-b-2 border-blue-600 mt-4 mb-12 mx-auto" />
            <Row xs sm={2} md={2} lg={3} className="blogs g-4">
                {
                    blogs.slice(0, 3)?.map(blog =>
                        <Blog
                            key={Math.random()}
                            blog={blog}
                        ></Blog>
                    )
                }
            </Row>
        </Container>
    );
};

export default Blogs;


