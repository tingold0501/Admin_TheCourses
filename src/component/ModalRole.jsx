import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import axios from 'axios';
function ModalRole() {
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
    const urlApi = 'http://localhost/api/';
    const [showModal, setShowModal] = useState(false);
    const [roleName, setNameRole] = useState('');

    const subscribeToNewRole = () =>{
        if(roleName == ''){
            toast.error('🦄 Name Role is null!', {
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
        else{
            axios({
                method: 'post',
                url: urlApi + 'addRole',
                data: {
                    roleName:roleName
                }
            }).then((res)=>{
                if(res.data.check == true){
                    toast.success('🦄 Add new Role success!', {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    window.location.reload();
                }
                else if(res.data.msg.roleName){
                    toast.success('🦄' +res.data.msg.roleName, {
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
            })
        }
    }
    
    return (
        <div className="flex items-center justify-center ">
            <ToastContainer />
            <div x-data="{ showModal: true, email: '' }">
                <button
                    onClick={() => setShowModal(true)}
                    className="w-full px-4 py-2 text-sm  font-medium text-black bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                >
                    Add Role
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
                                            Subscribe New Role
                                        </h3>

                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">Enter Name Role.</p>
                                            <input
                                                type="text"
                                                value={roleName}
                                                onChange={(e) =>setNameRole(e.target.value)}
                                                className="mt-2 p-2 border text-black border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
                                                placeholder="Admin"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    onClick={subscribeToNewRole}
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

export default ModalRole