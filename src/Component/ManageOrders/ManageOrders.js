import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const ManageOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://lit-bastion-13259.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    const filterdOrders = orders.filter(order => order.data?.email === user?.email);
    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://lit-bastion-13259.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted succussfully');
                        const remainingOrder = orders.filter(order => order?._id !== id);
                        setOrders(remainingOrder);
                    }
                });
        }
    }
    return (
        <div>
            <div className="w-full h-full bg-white bg-opacity-90">
                <div className="w-full z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                    <div className="flex md:flex-row flex-col justify-end" id="cart">
                        <div className="w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white">
                            <p className="text-5xl font-black leading-10 text-blue-600 pt-3 pb-14">Manage Your Orders</p>
                            {
                                filterdOrders.map(order => <div key={Math.random()} className="md:flex items-center  py-4 border-t-2 border-blue-200">
                                    <div className="w-1/4">
                                        <img className="rounded-xl shadow-md" src={order.singlePackage?.img} alt="" />
                                    </div>
                                    <div className="md:pl-3 md:w-3/4">
                                        <div className="flex items-center justify-between w-full pt-1">
                                            <p className="text-xl font-black leading-none text-indigo-800">{order.singlePackage?.name}</p>
                                            <p className="text-base font-black leading-none text-indigo-800">$ {order.singlePackage?.cost}</p>
                                        </div>
                                        <div className=" pt-3 pr-6">

                                            <div className="flex itemms-center">
                                                <p className="text-sm leading-3 py-2 px-3 rounded text-indigo-800 border-indigo-800 border-2 hover:bg-blue-600 hover:text-white transition-all duration-500 pl-5 cursor-pointer">Wishlist</p>
                                                <button onClick={() => handleDeleteOrder(order?._id)} className="text-sm leading-3 py-2 px-3 rounded ml-5 text-red-500 border-red-400 border-2 hover:bg-red-600 hover:text-white transition-all duration-500 pl-5 cursor-pointer">Remove</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>)
                            }

                        </div>
                        <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-indigo-800 h-full sticky-top">
                            <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                                <div>
                                    <p className="text-4xl font-black leading-9 text-white">Summary</p>
                                    <div className="flex items-center justify-between pt-16">
                                        <p className="text-base leading-none text-white">Subtotal</p>
                                        <p className="text-base leading-none text-white">$30,000</p>
                                    </div>
                                    <div className="flex items-center justify-between pt-5">
                                        <p className="text-base leading-none text-white">Shipping</p>
                                        <p className="text-base leading-none text-white">$80</p>
                                    </div>
                                    <div className="flex items-center justify-between pt-5">
                                        <p className="text-base leading-none text-white">Tax</p>
                                        <p className="text-base leading-none text-white">$15</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                        <p className="text-2xl leading-normal text-white">Total</p>
                                        <p className="text-2xl font-bold leading-normal text-right text-white">$31,240</p>
                                    </div>
                                    <button className="text-base leading-none w-full py-3 rounded font-semibold bg-gray-100 border-white border-2 hover:bg-indigo-800  hover:text-white transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white text-indigo-800">
                                        Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;