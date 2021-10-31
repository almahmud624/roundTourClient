import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Package = ({ packagee }) => {
    const { id, name, shortDescription, img, cost } = packagee;
    return (
        <Col>
            <div className="flex justify-center items-center">
                <div className="flex flex-col justify-between w-72 sm:w-96 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer  rounded-r-lg" style={{ backgroundImage: `url(${img})` }}>
                    <div className="flex justify-between items-center ml-4 pr-8">
                        <div className="bg-indigo-800 text-white bg-opacity-95 shadow px-3 py-2 flex items-center font-semibold mt-3 text-md rounded">${cost}</div>
                    </div>
                    <div className="bg-indigo-800 bg-opacity-85 shadow-sm rounded-r-lg p-4 flex flex-col mr-4">
                        <h3 className="text-xl text-white font-bold pb-2">{name}</h3>
                        <p className="truncate text-white text-sm">{shortDescription}</p>
                        <div className="flex justify-center items-center">
                            <button className="border-white text-md my-3 hover:bg-blue-600 transition-all duration-500 font-semibold text-center py-2 px-4 border-2 rounded"><Link to={`/package-order/${id}`} className="text-white">Book Now</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default Package;