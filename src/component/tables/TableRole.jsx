import React from 'react';
import moment from "moment";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Chip,
    input,
} from "@material-tailwind/react";
import ModalRole from '../ModalRole';
import Swal from 'sweetalert2';
import axios from 'axios';
function TableRole() {
    const urlApi = 'http://localhost/api/';
    const [roles, setRoles] = useState([]);
    const [isEdit, setEdit] = useState(false);
    const [idEditRow, setIdEditRow] = useState(null);

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleToggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    <ToastContainer
        position="top-right"
        autoClose={1000}
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
    const deleteRole = (id, name) => {
        Swal.fire({
            title: "Bạn Chắc Chắn?",
            text: "Bạn Muốn Xoá Role  " + "[ " + name + " ]" + id,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Có!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios({
                    method: 'post',
                    url: urlApi + 'deleteRole',
                    data: {
                        id: id,
                    }
                }).then((res) => {
                    if (res.data.check == true) {
                        Swal.fire({
                            title: "Xoá Thành Công!",
                            text: "Đã Xoá Thành Công.",
                            icon: "success"
                        });
                        window.location.reload();
                    }
                    else if (res.data.check == false) {
                        toast.error('🦄' + res.data.msg, {
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
        });
    }

    const eidtRole = (id, name, status) => {
        setIdEditRow(id);
        setEdit(true);
        console.log(id, name, status, isEdit);
        
    }
    const exitEditMode = () => {
        setEdit(false);
    };
    useEffect(() => {
        fetch(urlApi + "getDataRole")
            .then((res) => res.json())
            .then((res) => {
                setRoles(res);
                console.log(res);
            });
    }, []);
    return (
        <div>
            <Card>
                <CardHeader variant="gradient" color="gray" className="mb-8 p-6 flex items-center justify-between">
                    <Typography variant="h6" color="white">
                        Roles Table
                    </Typography>
                    <ModalRole />
                </CardHeader>
                <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                    <table className="w-full min-w-[640px] table-auto">
                        <thead>
                            <tr>
                                {["role name", "status", "created at", "updated at", "", ""].map((el) => (
                                    <th
                                        key={el}
                                        className="border-b border-blue-gray-50 py-3 px-5 text-left"
                                    >
                                        <Typography
                                            variant="small"
                                            className="text-[11px] font-bold uppercase text-blue-gray-400"
                                        >
                                            {el}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {roles.map(
                                (itemRole, key) => {
                                    const className = `py-3 px-5 ${key === roles.length - 1
                                        ? ""
                                        : "border-b border-blue-gray-50"
                                        }`;

                                    return (
                                        <tr key={itemRole.name}>
                                            <td className={className}>
                                                <div className="flex items-center gap-4">
                                                    {
                                                        idEditRow === itemRole.id && isEdit ? (
                                                            <div className="relative h-10 w-full min-w-[200px]">
                                                                <input
                                                                    className="peer h-full w-full rounded-[7px] border border-green-500 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-green-500 placeholder-shown:border-t-green-500 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                                                    placeholder=" "
                                                                />
                                                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-green-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-green-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-green-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-green-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                                    {itemRole.name}
                                                                </label>
                                                            </div>
                                                        ) : (
                                                            <div>
                                                                <Typography variant="small" color="blue-gray" className="font-semibold">
                                                                    {itemRole.name}
                                                                </Typography>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </td>

                                            <td className={className}>
                                                <Chip
                                                    variant="gradient"
                                                    color={itemRole.status ? "green" : "blue-gray"}
                                                    value={itemRole.status ? "Opening" : "Closing"}
                                                    className="py-0.5 px-2 text-[11px] font-medium w-fit"
                                                />
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    {moment(itemRole.created_at).format("MMM Do YY , h:mm:ss a")}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    {moment(itemRole.updated_at).format("MMM Do YY , h:mm:ss a")}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                {
                                                    idEditRow == itemRole.id && isEdit ? (
                                                        <Typography
                                                            onClick={(e) => exitEditMode()}
                                                            as="a"
                                                            href="#"
                                                            className="text-xs font-semibold text-blue-gray-600"
                                                        >
                                                            Save
                                                        </Typography>
                                                    ) : (
                                                        <Typography
                                                            onClick={(e) => eidtRole(itemRole.id, itemRole.name, itemRole.status)}
                                                            as="a"
                                                            href="#"
                                                            className="text-xs font-semibold text-blue-gray-600"
                                                        >
                                                            Edit Name
                                                        </Typography>
                                                       

                                                    )
                                                }


                                            </td>
                                            <td className={className}>
                                                <Typography
                                                    onClick={(e) => deleteRole(itemRole.id, itemRole.name)}
                                                    as="a"
                                                    href="#"
                                                    className="text-xs font-semibold text-blue-gray-600"
                                                >
                                                    Delete
                                                </Typography>
                                            </td>

                                        </tr>
                                    );
                                }
                            )}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
        </div>
    );
}

export default TableRole;