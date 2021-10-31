import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import usePackages from '../../hooks/usePackages';

const PlaceOrder = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const { orderId } = useParams();
    const [packages] = usePackages();
    const [singlePackage, setPackage] = useState({});
    const [confirm, setConfirm] = useState(false);
    useEffect(() => {
        const foundPackage = packages?.find(service => service.id === Number(orderId));
        setPackage(foundPackage)
    }, [packages]);
    const onSubmit = data => {
        data = { data, singlePackage };
        fetch("https://lit-bastion-13259.herokuapp.com/orders", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    if (window.confirm('Your order has been placed.Press OK to see your Order List')) {
                        setConfirm(true);
                    } else {
                        setConfirm(false);
                    }
                    reset();
                }
            })
    };
    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
                    <div className="flex flex-col justify-start items-start w-full space-y-9">
                        <div className="flex justify-start flex-col items-start space-y-2">
                            <p className="text-3xl lg:text-5xl font-semibold leading-7 lg:leading-9 text-blue-600">Checkout</p>
                        </div>

                        <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
                            <div className="xl:w-3/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-indigo-800 rounded text-white py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
                                <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                                    <img src={singlePackage?.img} alt="" className=" rounded-lg" style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70% ' }} />
                                </div>
                                <div className="flex flex-col justify-center items-center w-full space-y-4">
                                    <p className="text-xl md:text-5xl font-bold text-white">{singlePackage?.name}</p>
                                    <p className=" font-normal text-base leading-6 text-white mt-7">{singlePackage?.shortDescription}</p>
                                    <p className="text-xl font-semibold text-white">$ {singlePackage?.cost}</p>
                                </div>
                            </div>

                            <div className="p-8 bg-indigo-800 rounded flex flex-col lg:w-full justify-center xl:w-3/5">
                                <form className="max-w-xl m-0 p-3 py-5 bg-white rounded shadow-xl" onSubmit={handleSubmit(onSubmit)}>
                                    <p className="text-gray-800 font-bold text-2xl mb-3">Customer information</p>
                                    <div className="">
                                        <input className="w-full pl-5 py-2 my-2 text-gray-700 bg-gray-200 rounded" type="text" required="" defaultValue={user.displayName} {...register("name")} placeholder="Your Name" aria-label="Name" />
                                    </div>
                                    <div className="mt-2">
                                        <input className="w-full pl-5 py-2 my-2 text-gray-700 bg-gray-200 rounded" type="text" required="" defaultValue={user.email} {...register("email", { required: true })} placeholder="Your Email" aria-label="Email" />
                                    </div>
                                    <div className="mt-2">
                                        <input className="w-full px-2 py-2 my-2 text-gray-700 bg-gray-200 rounded" defaultValue="" {...register("address", { required: true })} type="text" required="" placeholder="Street" aria-label="Email" />
                                    </div>
                                    <div className="mt-2">
                                        <input className="w-full px-2 py-2 my-2 text-gray-700 bg-gray-200 rounded" defaultValue="" {...register("city", { required: true })} type="text" required="" placeholder="City" aria-label="Email" />
                                    </div>
                                    <div className="block mt-2 pr-1">
                                        <input className="w-full px-2 py-2 my-2 text-gray-700 bg-gray-200 rounded" defaultValue="" {...register("country", { required: true })} type="text" required="" placeholder="Country" aria-label="Email" />
                                    </div>
                                    <div className="mt-4">
                                        <button className="px-4 py-1 text-indigo-800 border-indigo-800 border-2 hover:bg-blue-600 hover:text-white transition-all duration-500 font-semibold tracking-wide rounded" type="submit">{confirm && (<Redirect to={{
                                            pathname: '/orders'
                                        }}></Redirect>)}Book Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;