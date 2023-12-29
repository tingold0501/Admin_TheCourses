import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { Select } from '@material-tailwind/react';

function ModalUser() {
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
    />
    {/* Same as */ }
    <ToastContainer />

    const urlApi = 'http://127.0.0.1:8000/api/';
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [idRole, setIdRole] = useState([]);
    const subscribeToNewUser = () => {
        if (email == "") {
            console.log("Email Null");
            toast.error('🦄 Email is null!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else if (name == "") {
            toast.error('🦄 Name is null!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    useEffect(() => {
        fetch(urlApi + "getData")
            .then((res) => res.json())
            .then((res) => {
                setUsers(res);
                console.log(res);
            });
    },[])

    return (
        <div className="flex items-center justify-center ">
            <ToastContainer />
            <div x-data="{ showModal: true, email: '' }">
                <button
                    onClick={() => setShowModal(true)}
                    className="w-full px-4 py-2 text-sm  font-medium text-black bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                >
                    Add User
                </button>
                <div
                    style={{ display: showModal ? 'block' : 'none' }}
                    className="fixed inset-0 transition-opacity"
                    aria-hidden="true"
                    onClick={() => setShowModal(false)}
                >
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div
                    style={{ display: showModal ? 'block' : 'none' }}
                    className="fixed z-10 inset-0 overflow-y-auto"
                >
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="w-full inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <svg
                                            width="64px"
                                            height="64px"
                                            viewBox="0 0 24 24"
                                            className="h-6 w-6 text-blue-600"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            stroke="#2563eb"
                                            strokeWidth="0.36"
                                        >
                                            {/* ... (SVG content) ... */}
                                        </svg>
                                    </div>
                                    <div className="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                            Subscribe New User
                                        </h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">Enter email user.</p>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
                                                placeholder="name@example.com"
                                            />
                                        </div>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">Enter  full name user.</p>
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
                                                placeholder="Pham Van A"
                                            />
                                        </div>

                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">Select role user.</p>
                                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option selected>Choose a country</option>
                                                <option value="US">United States</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    onClick={subscribeToNewUser}
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={() => setShowModal(false)}
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalUser