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
} from "@material-tailwind/react";
import ModalUser from '../ModalUser';

function TableUser() {
    const urlApi = 'http://localhost/api/'
    const [users, setUsers] = useState([]);
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
    const [isEditUser, setIsEditUser] = useState(false);
    const [editingUserId, setEditingUserId] = useState(null);
    const [roles, setRoles] = useState([]);
    const [idRole, setIdRole] = useState(0);
    const [initialUserData, setInitialUserData] = useState(null);
    useEffect(() => {
        fetch(urlApi + "getDataUser")
            .then((res) => res.json())
            .then((res) => {
                setUsers(res);
                console.log(res);
            });
    }, []);
    return (
        <div>
            <Card>
                <CardHeader variant="gradient" color="gray" className="mb-8 p-6 flex items-center justify-between">
                    <Typography variant="h6" color="white">
                        Users Table
                    </Typography>
                    <ModalUser />

                </CardHeader>
                <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                    <table className="w-full min-w-[640px] table-auto">
                        <thead className=''>
                            <tr>
                                {[" name", "status", "role name", "created at", "updated at", "", ""].map((el) => (
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
                            {users.map(
                                (itemUsers, key) => {
                                    const className = `py-3 px-5  ${key === roles.length - 1
                                        ? ""
                                        : "border-b border-blue-gray-50"
                                        }`;

                                    return (
                                        <tr key={itemUsers.name}>

                                            <td className={className}>
                                                <div className="flex items-center gap-4">
                                                    {/* <Avatar src={img} alt={name} size="sm" variant="rounded" /> */}
                                                    {isEditUser && editingUserId === itemUsers.id && initialUserData ? (
                                                        <div className="relative h-10 w-full min-w-[200px]">
                                                        <input
                                                            onChange={(e) => setNameRole(e.target.value)}
                                                            className="peer h-full w-full rounded-[7px] border border-green-500 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-green-500 placeholder-shown:border-t-green-500 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                                            placeholder=" "
                                                        />
                                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-green-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-green-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-green-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-green-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                            {itemRole.name}
                                                        </label>
                                                    </div>
                                                    ) : (
                                                        <div>
                                                            <Typography
                                                                variant="small"
                                                                color="blue-gray"
                                                                className="font-semibold"
                                                            >
                                                                {itemUsers.name}
                                                            </Typography>
                                                            <Typography className="text-xs font-normal text-blue-gray-500">
                                                                {itemUsers.email}
                                                            </Typography>
                                                        </div>
                                                    )}

                                                </div>
                                            </td>

                                            {/* <Avatar src={img} alt={name} size="sm" variant="rounded" /> */}


                                            {/* <td className={className}>
                                                {isEditUser && editingUserId == itemUsers.id ? (
                                                    <input
                                                        className="w-full "
                                                        type="text"
                                                        placeholder={itemUsers.email}
                                                        // Sử dụng giá trị hiện tại
                                                        // Cập nhật giá trị khi người dùng thay đổi
                                                        onChange={(e) => setUserEmail(e.target.value, 'email')}
                                                    />
                                                ) : (
                                                    <div className="flex items-center gap-4">
                                                        <div>
                                                            <Typography
                                                                variant="small"
                                                                color="blue-gray"
                                                                className="font-semibold"
                                                            >
                                                                {itemUsers.email}
                                                            </Typography>
                                                            
                                                        </div>
                                                    </div>
                                                )}

                                            </td> */}
                                            <td className={className}>
                                                <Chip
                                                    variant="gradient"
                                                    onClick={(e) => editStatus(itemRole.id, itemRole.status, itemRole.name)}
                                                    color={itemUsers.status ? "green" : "red"}
                                                    value={itemUsers.status ? "Opening" : "Closing"}
                                                    className="py-0.5 px-2 text-[11px] font-medium w-fit cursor-pointer"
                                                />
                                            </td>

                                            <td className={className}>
                                                <div className="flex items-center gap-4">
                                                    {isEditUser && editingUserId === itemUsers.id && initialUserData ? (
                                                        <select
                                                            value={idRole || itemUsers.idRole}
                                                            onChange={handleRoleSelection}
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        >
                                                            <option value="" disabled>Select Role</option>
                                                            {roles.map((item) => (
                                                                <option key={item.id} value={item.id}>
                                                                    {item.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    ) : (
                                                        <div>
                                                            {roles.map((role) => {
                                                                // Thêm điều kiện để chỉ hiển thị thông tin của vai trò của người dùng
                                                                if (role.id === itemUsers.idRole) {
                                                                    return (
                                                                        <div key={role.id}>
                                                                            <Typography
                                                                                variant="small"
                                                                                color="blue-gray"
                                                                                className="font-semibold"
                                                                            >
                                                                                {role.name}
                                                                            </Typography>
                                                                        </div>
                                                                    );
                                                                }
                                                                return null; // Tránh trường hợp không thỏa mãn điều kiện
                                                            })}
                                                        </div>
                                                    )}
                                                </div>
                                            </td>


                                            <td className={className}>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    {moment(itemUsers.created_at).format("MMM Do YY , h:mm:ss a")}

                                                </Typography>
                                                {/* <Typography className="text-xs font-normal text-blue-gray-500">
                          {job[1]}
                        </Typography> */}
                                            </td>

                                            <td className={className}>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    {moment(itemUsers.updated_at).format("MMM Do YY , h:mm:ss a")}

                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                {isEditUser && editingUserId === itemUsers.id ? (
                                                    <Typography
                                                        onClick={(e) => saveEditUser()}
                                                        as="a"
                                                        href="#"
                                                        className="text-xs font-semibold text-blue-gray-600"
                                                    >
                                                        Save
                                                    </Typography>

                                                ) : (
                                                    <Typography
                                                        onClick={(e) => editUser(itemUsers.id)}
                                                        as="a"
                                                        href="#"
                                                        className="text-xs font-semibold text-blue-gray-600"
                                                    >
                                                        Edit
                                                    </Typography>

                                                )}

                                            </td>
                                            <td className={className}>
                                                <Typography
                                                    onClick={(e) => deleteUser(itemUsers.id, itemUsers.name)}
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

export default TableUser;