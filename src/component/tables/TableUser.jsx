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
                        <thead>
                            <tr>
                                {[" name", "email", "role name", "created at", "status", "updated at", "", ""].map((el) => (
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
                                    const className = `py-3 px-5 ${key === roles.length - 1
                                        ? ""
                                        : "border-b border-blue-gray-50"
                                        }`;

                                    return (
                                        <tr key={itemUsers.name}>
                                            {isEditUser && editingUserId === itemUsers.id && initialUserData ? (
                                                <input
                                                    className="w-full mt-5 ml-4"
                                                    type="text"
                                                    placeholder={itemUsers.name}
                                                    // Sử dụng giá trị hiện tại
                                                    // Cập nhật giá trị khi người dùng thay đổi
                                                    onChange={(e) => setUserName(e.target.value, 'name')}
                                                />
                                            ) : (
                                                <td className={className}>
                                                    <div className="flex items-center gap-4">
                                                        {/* <Avatar src={img} alt={name} size="sm" variant="rounded" /> */}
                                                        <div>
                                                            <Typography
                                                                variant="small"
                                                                color="blue-gray"
                                                                className="font-semibold"
                                                            >
                                                                {itemUsers.name}
                                                            </Typography>
                                                            {/* <Typography className="text-xs font-normal text-blue-gray-500">
                              {email}
                            </Typography> */}
                                                        </div>
                                                    </div>
                                                </td>

                                            )}

                                            <td className={className}>
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
                                                        {/* <Avatar src={img} alt={name} size="sm" variant="rounded" /> */}
                                                        <div>
                                                            <Typography
                                                                variant="small"
                                                                color="blue-gray"
                                                                className="font-semibold"
                                                            >
                                                                {itemUsers.email}
                                                            </Typography>
                                                            {/* <Typography className="text-xs font-normal text-blue-gray-500">
                              {email}
                            </Typography> */}
                                                        </div>
                                                    </div>
                                                )}

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
                                                    {itemUsers.created_at}
                                                </Typography>
                                                {/* <Typography className="text-xs font-normal text-blue-gray-500">
                          {job[1]}
                        </Typography> */}
                                            </td>
                                            <td className={className}>
                                                {isEditUser && editingUserId === itemUsers.id && initialUserData ? (
                                                    <select
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        defaultValue={initialUserData.status}
                                                    >

                                                        <option value={1}>Opening</option>
                                                        <option value={0}>Closing</option>
                                                    </select>
                                                ) : (
                                                    <Chip
                                                        variant="gradient"
                                                        color={itemUsers.status ? "green" : "blue-gray"}
                                                        value={itemUsers.status ? "Opening" : "Closing"}
                                                        className="py-0.5 px-2 text-[11px] font-medium w-fit"
                                                    />
                                                )}

                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    {itemUsers.updated_at}
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