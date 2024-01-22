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
import { setId } from '@material-tailwind/react/components/Tabs/TabsContext';
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
    const [phone, setPhone] = useState('');
    const [idRole, setIdRole] = useState(0);

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
        else if(phone == ''){
            toast.error('🦄 Phone User is Null!', {
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
            axios({
                method: 'post',
                url: urlAPI + 'addNewUser',
                data: {
                    name: name,
                    email: email,
                    phone:phone,
                    idRole: idRole
                }
            }).then((res) => {
                console.log(name,email,phone,idRole);
                if(res.data.check == true){
                    toast.success('🦄' + res.data.msg, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                }
                else if(res.data.check == false){
                    if(res.data.msg.name){
                        toast.error('🦄' + res.data.msg.name, {
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
                    if(res.data.msg.phone){
                        toast.error('🦄' + res.data.msg.phone, {
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
                    else if(res.data.msg.email){
                        toast.error('🦄' + res.data.msg.email, {
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
                }
                
            })
        }
    }
    useEffect(() => {
        fetch(urlAPI + "getActiveRole")
            .then((res) => res.json())
            .then((res) => {
                setRoles(res);
                console.log(res);
            });
    }, []);
    return (
        <div>
            <ToastContainer />
            <>
                {/* Button trigger modal */}
                <button
                    type="button"
                    className="w-full px-4 py-2 text-sm  font-medium text-black bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                >
                    Add User
                </button>
                {/* Modal */}
                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 text-black" id="exampleModalLabel">
                                    Add New User
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body">
                                <>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1">
                                            @
                                        </span>
                                        <input
                                        onChange={(e) => setName(e.target.value)}
                                            type="text"
                                            className="form-control"
                                            placeholder="Nguyen Van A"
                                            aria-label="Name"
                                            aria-describedby="basic-addon1"
                                        />

                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1">
                                            #
                                        </span>
                                        <input
                                            onChange={(e) => setPhone(e.target.value)}
                                            type="text"
                                            className="form-control"
                                            placeholder="09127561226"
                                            aria-label="Phone"
                                            aria-describedby="basic-addon1"
                                        />

                                    </div>
                                    <div className="input-group mb-3">
                                        <input
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="text"
                                            className="form-control"
                                            placeholder="NguyenVanA0101@gmail.com"
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                        />
                                        <span className="input-group-text" id="basic-addon2">
                                            @example.com
                                        </span>
                                    </div>
                                    <div className="input-group mb-3">
                                        <select onChange={(e) => setIdRole(e.target.value)} className='form-control'>
                                            {roles.map((item) => (
                                                <option key={item.id} value={item.id}>
                                                    {item.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </>

                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary text-black"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button onClick={(e) => submitAddUser()} type="button" className="btn btn-primary text-black">
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </div>
    )
}

export default ModalUser