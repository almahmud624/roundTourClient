import React, { useRef } from 'react';

const AddPackage = () => {
    const nameRef = useRef();
    const desRef = useRef();
    const costRef = useRef();
    const imgRef = useRef();
    const handleAddPackage = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const description = desRef.current.value;
        const cost = costRef.current.value;
        const img = imgRef.current.value;

        const newPackage = { name, description, cost, img };
        fetch('https://lit-bastion-13259.herokuapp.com/packages', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPackage)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Package added succesfully!');
                    e.target.reset();
                }
            })
    }
    return (
        <div>
            <div className=" bg-gray-100 flex justify-center py-12">
                <div className="px-8 py-6 w-3/4 md:w-1/2 bg-white rounded-lg shadow-xl">
                    <form onSubmit={handleAddPackage}>
                        <p className="text-gray-800 font-bold text-3xl mb-3">Create your own package</p>
                        <div className="mb-2">
                            <input type="text" placeholder="Package Name" ref={nameRef} className="w-full border border-gray-300 py-2 pl-3 rounded  outline-none focus:ring-indigo-600 :ring-indigo-600" required="required" />
                        </div>
                        <div className="mb-2">
                            <textarea type="text" ref={desRef} placeholder="Description" className="w-full border border-gray-300 py-2 pl-3 rounded  outline-none focus:ring-indigo-600 :ring-indigo-600" required="required" />
                        </div>
                        <div className="mb-2">
                            <input type="number" placeholder="Cost" ref={costRef} className="w-full border border-gray-300 py-2 pl-3 rounded  outline-none focus:ring-indigo-600 :ring-indigo-600" required="required" />
                        </div>
                        <div className="mb-2">
                            <input type="text" placeholder="Image Link" ref={imgRef} className="w-full border border-gray-300 py-2 pl-3 rounded  outline-none focus:ring-indigo-600 :ring-indigo-600" required="required" />
                        </div>
                        <button type="submit" className="px-4 py-1 text-indigo-800 border-indigo-800 border-2 hover:bg-blue-600 hover:text-white transition-all duration-500 font-semibold tracking-wide rounded w-full mt-4">Add Package</button>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default AddPackage;

