import React from 'react';
import { Container, Row } from 'react-bootstrap';
import usePackages from '../../../hooks/usePackages';
import Package from '../Package/Package';

const Packages = () => {
    const [packages] = usePackages();
    return (
        <Container className="pb-5">
            <h1 className="my-4 text-5xl font-bold">Special <span className="text-blue-600">Packages</span></h1>
            <p className="text-lg text-gray-600 mb-4">No matter where you're going from, we take you there</p>
            <div className=" w-24 sm:border-b-0 md:border-b-2 border-blue-600 mt-4 mb-12 mx-auto" />
            <Row xs sm={2} md={2} lg={3} className="blogs g-4">
                {
                    packages?.slice(0, 6).map(packagee =>
                        <Package
                            key={Math.random()}
                            packagee={packagee}
                        ></Package>
                    )
                }
            </Row>
        </Container>
    );
};

export default Packages;