import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import CustomerReview from '../CustomerReview/CustomerReview';
import Newsletter from '../Newsletter/Newsletter';
import Packages from '../Packages/Packages';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Packages></Packages>
            <Blogs></Blogs>
            <CustomerReview></CustomerReview>
            <Newsletter></Newsletter>
        </>
    );
};

export default Home;