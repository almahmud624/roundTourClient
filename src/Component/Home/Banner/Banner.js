import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <section className="banner">
                <div>
                    <div className="hero">
                        <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
                            <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

                                <div className="hero-text col-span-6 sm:order-last md:order-first md:text-left sm:text-center pt-4 lg:pt-0">
                                    <h1 className="font-bold text-5xl md:text-7xl max-w-xl text-gray-900 leading-tight">Packed with <span className="text-blue-600">Purpose</span></h1>
                                    <p className="text-gray-800 text-base leading-relaxed mt-8 font-medium">We’ll help you leave yesterday behind and find what’s ahead.Travel with one of us and we will prove to you that it’s never been easier, safer, or more fun</p>
                                </div>
                                <div className="hero-image col-span-6 order-first sm:order-first md:order-last">
                                    <img src='https://image.freepik.com/free-photo/tourist-running-fast_1368-7021.jpg' className="rounded-sm" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section>
        </>
    );
};

export default Banner;