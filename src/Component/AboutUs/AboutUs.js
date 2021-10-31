import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <Container>
            <Row xs={1} sm={1} md={1} lg={2} className="justify-center items-center my-7">
                <Col className="sm:order-last md:order-first md:text-left sm:text-center pt-4 lg:pt-0">
                    <h4 className="text-2xl font-semibold text-blue-600">About Us</h4>
                    <h2 className="text-5xl font-bold my-3">The ultimate guide to the world's creative neighborhoods.</h2>
                    <p className=" text-md">From 2015 - 2019, Round Tour featured the vibrant neighborhoods around the world where contemporary arts and culture thrive and tolerance is celebrated. It was the quintessential exploration guide made by and for the urban creatives.</p>
                    <p className=" text-md mt-2">In 2020, in the midst of a pandemic that affected us all in countless ways, we decided to officially stop updating On the Grid. You can read all about it here. We take comfort in knowing that we have seen ample proof of our initial intuition when began this journey — creativity lives everywhere.</p>
                </Col>
                <Col className="order-first sm:order-first md:order-last">
                    <img src="https://image.freepik.com/free-photo/front-view-young-traveller-with-big-backpack-holding-map-hailing-someone_179666-41848.jpg" alt="" style={{ borderRadius: '55% 45% 34% 66% / 56% 63% 37% 44% ' }} />
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;