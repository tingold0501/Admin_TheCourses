import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import axios from 'axios';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
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
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [loading, setLoading] = useState(false);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const urlAPI = 'http://localhost/api/';
    const [roles, setRoles] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const submitAddUser = () => {
        if (name == '') {
            toast.error('🦄 Full Name User is Null!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else if (email == '') {
            toast.error('🦄 Email User is Null!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            setLoading(true);
            axios({
                method: 'post',
                url: urlAPI + 'addNewUser',
                data: {
                    name: name,
                    email: email,
                }
            }).then((res) => {
                console.log(res);
            })
        }
    }
    useEffect(() => {
        fetch(urlAPI + "getDataRole")
            .then((res) => res.json())
            .then((res) => {
                setRoles(res);
                console.log(res);
            });
    }, []);
    return (
        <div>
            <ToastContainer />
            <Button variant="outlined" color='success' onClick={handleOpen}>Open Modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        User Modal
                    </Typography>
                    <Typography id="modal-modal-description" >
                        <div className="w-full max-w-lg">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full  px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-first-name"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name"
                                        type="text"
                                        placeholder="Nguyen Van A"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                                </div>
                                <div className="w-full  px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor=""
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name"
                                        type="text"
                                        placeholder="example@gmail.com"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                                </div>

                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Password
                                    </label>
                                    <input
                                        disabled
                                        className=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-password"
                                        type="password"
                                        placeholder="******************"
                                    />
                                    <p className="text-gray-600 text-xs italic">
                                        Password will auto rang
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-2">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-state"
                                    >
                                        Status
                                    </label>
                                    <div className="relative">

                                        <select
                                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-state"
                                        >
                                            <option>Opening</option>
                                            <option>Cloesing</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg
                                                className="fill-current h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-state"
                                    >
                                        Role
                                    </label>
                                    {roles.length > 0 && (
                                        <div className="relative">
                                            <select
                                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-state"
                                            >
                                                <option value="" disabled>Select Role</option>
                                                {roles.map((item) => (
                                                    <option key={item.id} value={item.id}>
                                                        {item.name}
                                                    </option>
                                                ))}
                                            </select>

                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg
                                                    className="fill-current h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                </svg>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mt-3 mb-2"
                                        htmlFor="grid-state"
                                    >
                                    </label>
                                    <div className="relative mb-2">
                                        <LoadingButton
                                            color="secondary"
                                            onClick={submitAddUser}
                                            loading={loading}
                                            loadingPosition="start"
                                            startIcon={<SaveIcon />}
                                            variant="outlined"
                                        >
                                            <span>Save</span>
                                        </LoadingButton>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default ModalUser