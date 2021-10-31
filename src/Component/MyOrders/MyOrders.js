import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://lit-bastion-13259.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    const filterdOrders = orders.filter(order => order.data?.email === user?.email);
    return (
        <div>
            <div className="2xl:container 2xl:mx-auto py-14 px-4 md:px-6 xl:px-20">
                <div className="flex flex-col xl:flex-row justify-center items-center space-y-10 xl:space-y-0 xl:space-x-8">
                    <div className="w-full lg:w-9/12 xl:w-full">
                        <img className="w-full hidden xl:block" src="https://image.freepik.com/free-photo/tourist-with-thumb-up_1368-7035.jpg" alt=" " />
                        <img className="w-full hidden md:block xl:hidden" src="https://image.freepik.com/free-photo/tourist-with-thumb-up_1368-7035.jpg" alt=" " />
                        <img className="w-full md:hidden" src="https://image.freepik.com/free-photo/tourist-with-thumb-up_1368-7035.jpg" alt=" " />
                    </div>
                    <div className="flex justify-center flex-col items-start w-full lg:w-9/12 xl:w-full ">
                        <h3 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 w-full  md:text-left text-blue-600">Order Summary</h3>
                        <div className="order-list flex justify-center items-center w-full mt-8  flex-col space-y-4">
                            {filterdOrders?.map(order => <div key={Math.random()} className="package-order flex md:flex-row justify-start items-start md:items-center pb-3  border-b-2 border-blue-200 w-full">
                                <div className="w-44 md:w-40">
                                    <img className="hidden md:block rounded-lg" src={order.singlePackage?.img} alt="girl-in-red-dress" />
                                    <img className="md:hidden rounded-lg" src={order.singlePackage?.img} alt="girl-in-red-dress" />
                                </div>
                                <div className="flex justify-start md:justify-between items-start md:items-center  flex-col md:flex-row w-full pl-3 md:px-8">
                                    <div className="flex flex-col md:flex-shrink-0  justify-start items-start">
                                        <h3 className="text-lg md:text-xl  w-full font-semibold leading-6 md:leading-5  text-indigo-800">{order.singlePackage?.name}</h3>
                                    </div>
                                    <div className="flex md:mt-0 md:justify-end items-center w-full ">
                                        <p className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">$ {order.singlePackage?.cost}.00</p>
                                    </div>
                                </div>
                            </div>)}

                        </div>
                        <div className="flex flex-col justify-start items-start mt-8 xl:mt-10 space-y-10 w-full">
                            <div className="flex flex-col space-y-4 w-full">
                                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-400 border-b-2 pb-4">
                                    <div className="flex justify-between  w-full">
                                        <p className="text-base leading-4 text-gray-800">Subtotal</p>
                                        <p className="text-base leading-4 text-gray-600">$536.00</p>
                                    </div>
                                    <div className="flex justify-between  w-full">
                                        <p className="text-base leading-4 text-gray-800">
                                            Tax
                                        </p>
                                        <p className="text-base leading-4 text-gray-600">-$228.00 (50%)</p>
                                    </div>
                                    <div className="flex justify-between  w-full">
                                        <p className="text-base leading-4 text-gray-800">Shipping</p>
                                        <p className="text-base leading-4 text-gray-600">$128.00</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                                    <p className="text-base font-semibold leading-4 text-gray-600">$3346.00</p>
                                </div>
                                <div className="flex w-full justify-center items-center pt-1 md:pt-4  xl:pt-8 space-y-6 md:space-y-8 flex-col">
                                    <button className="py-3 flex-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800  w-full inline-block text-base font-medium leading-4 text-indigo-800 border-indigo-800 border-2 hover:bg-blue-600 hover:text-white transition-all duration-500 rounded">Track Your Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;