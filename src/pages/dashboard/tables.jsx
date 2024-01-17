import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Button,
  Progress,
  input,
} from "@material-tailwind/react";

import { useEffect, useState } from "react";
import ModalRole from "@/component/ModalRole";
import Swal from "sweetalert2";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalUser from "@/component/ModalUser";


export function Tables() {
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
  const urlApi = 'http://localhost/api/';
  const [isEditUser, setIsEditUser] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);
  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [idRole, setIdRole] = useState(0);
  const [status, setStatus] = useState(true);
  const [rowIdRoles, setRowIdRoles] = useState({});
  const [initialUserData, setInitialUserData] = useState(null);



  const deleteRole = (id, name) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      html: "<b></b>" + name,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: 'post',
          url: urlApi + 'deleteRole',
          data: {
            id: id
          }
        }).then((res) => {
          if (res.data.check == true) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            window.location.reload();
          }
          else if (res.data.check == false) {
            toast.error('🦄' + res.data.msg,
              {
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

  const deleteUser = (id, name) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      html: "<b></b>" + name,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: 'post',
          url: urlApi + 'delete',
          data: {
            id: id
          }
        }).then((res) => {
          if (res.data.check == true) {
            Swal.fire({
              title: "Deleted!",
              text: "Your user has been deleted.",
              icon: "success"
            });
            window.location.reload();
          }
          else if (res.data.check == false) {
            toast.error('🦄' + res.data.msg,
              {
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

  const editUser = (idUser) => {
    setIsEditUser(true);
    setEditingUserId(idUser);
    console.log("Editing User ID: " + idUser);
    // Lấy giá trị idRole của người dùng hiện tại và cập nhật vào state idRole
    const currentUserRole = users.find((user) => user.id === idUser)?.idRole;
    const currentUser = users.find((user) => user.id === idUser);
    setInitialUserData({
      name: currentUser.name,
      email: currentUser.email,
      idRole: currentUser.idRole,
      status: currentUser.status,
    });

    setIdRole(currentUserRole || "");
    // Log giá trị cũ
    console.log("Old User Data:", {
      name: currentUser.name,
      email: currentUser.email,
      idRole: currentUser.idRole,
      status: currentUser.status,
    });


  }

  const handleRoleSelection = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const selectedRoleId = selectedOption.value;
    console.log("Selected Role ID:", selectedRoleId);
    setIdRole(selectedRoleId);
  };

  const saveEditUser = () => {
    setIsEditUser(false);
    setEditingUserId(null);
    console.log("Edit" + isEditUser);

    // Kiểm tra xem email, name, idRole, status có thay đổi không
    const hasNameChanged = initialUserData.name !== userName;
    const hasEmailChanged = initialUserData.email !== userEmail;
    const hasIdRoleChanged = initialUserData.idRole !== idRole;
    const hasStatusChanged = initialUserData.status !== status;

    setUserName(userName);
    setUserEmail(userEmail);
    if (!hasNameChanged) {
      setUserName(initialUserData.name);
      console.log(userName);
    }
    // if (!hasEmailChanged) {
    //   setUserEmail(initialUserData.email);
    //   console.log(userEmail);
    // }
    // if (!hasIdRoleChanged) {
    //   setIdRole(initialUserData.idRole);
    //   console.log(idRole);
    // }
    // if (!hasStatusChanged) {
    //   setUserStatus(initialUserData.status);
    //   console.log(status);
    // }
    console.log({
      userName,
      userEmail,
      idRole,
      status,
    });

    // axios({
    //   method: 'post',
    //   url: urlApi + 'edit',
    //   data: {
    //     id: editingUserId,
    //     userName: userName,
    //     userEmail: userEmail,
    //     idRole: currentUser.idRole,
    //     status: currentUser.status,
    //   }
    // }).then((res) => {
    //   if (res.data.check == true) {
    //     toast.success('🦄 Edit Success',
    //       {
    //         position: "top-right",
    //         autoClose: 1000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //       });
    //       window.location.reload();
    //   }
    //   else if (res.data.check == false) {
    //     if (res.data.msg.userName) {
    //       toast.error('🦄' + res.data.msg.userName,
    //         {
    //           position: "top-right",
    //           autoClose: 1000,
    //           hideProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //           theme: "light",
    //         });
    //     }
    //     else if (res.data.msg.userEmail) {
    //       toast.error('🦄' + res.data.msg.userEmail,
    //         {
    //           position: "top-right",
    //           autoClose: 1000,
    //           hideProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //           theme: "light",
    //         });
    //     }

    //   }
    // })
  }

  useEffect(() => {
    fetch(urlApi + "getDataRole")
      .then((res) => res.json())
      .then((res) => {
        setRoles(res);
        console.log(res);
      });
  }, []);

  useEffect(() => {
    fetch(urlApi + "getDataUser")
      .then((res) => res.json())
      .then((res) => {
        // let currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
        // res.data.created_at = currentDate;
        setUsers(res);
        console.log(res);
      });
  }, []);
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6 flex items-center justify-between">
          <Typography variant="h6" color="white">
            Roles Table
          </Typography>
          <ModalRole />
          {/* <Button className="bg-white text-black">Add User</Button> */}
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["role name",  "status", "created at","updated at", "", ""].map((el) => (
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
                          {/* <Avatar src={img} alt={name} size="sm" variant="rounded" /> */}
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {itemRole.name}
                            </Typography>
                            {/* <Typography className="text-xs font-normal text-blue-gray-500">
                              {email}
                            </Typography> */}
                          </div>
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
                          {itemRole.created_at}
                        </Typography>
                        {/* <Typography className="text-xs font-normal text-blue-gray-500">
                          {job[1]}
                        </Typography> */}
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {itemRole.updated_at}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          Edit
                        </Typography>
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
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6 flex items-center justify-between">
          <Typography variant="h6" color="white">
            Users Table
          </Typography>
          <ModalUser />
          {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal> */}
          {/* <Button className="bg-white text-black">Add User</Button> */}
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

      {/* <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6 flex items-center justify-between">
          <Typography variant="h6" color="white">
            User Table
          </Typography>
          <ModalUser />
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["companies", "members", "budget", "completion", ""].map(
                  (el) => (
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
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {projectsTableData.map(
                ({ img, name, members, budget, completion }, key) => {
                  const className = `py-3 px-5 ${key === projectsTableData.length - 1
                    ? ""
                    : "border-b border-blue-gray-50"
                    }`;

                  return (
                    <tr key={name}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar src={img} alt={name} size="sm" />
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {name}
                          </Typography>
                        </div>
                      </td>
                      <td className={className}>
                        {members.map(({ img, name }, key) => (
                          <Tooltip key={name} content={name}>
                            <Avatar
                              src={img}
                              alt={name}
                              size="xs"
                              variant="circular"
                              className={`cursor-pointer border-2 border-white ${key === 0 ? "" : "-ml-2.5"
                                }`}
                            />
                          </Tooltip>
                        ))}
                      </td>
                      <td className={className}>
                        <Typography
                          variant="small"
                          className="text-xs font-medium text-blue-gray-600"
                        >
                          {budget}
                        </Typography>
                      </td>
                      <td className={className}>
                        <div className="w-10/12">
                          <Typography
                            variant="small"
                            className="mb-1 block text-xs font-medium text-blue-gray-600"
                          >
                            {completion}%
                          </Typography>
                          <Progress
                            value={completion}
                            variant="gradient"
                            color={completion === 100 ? "green" : "gray"}
                            className="h-1"
                          />
                        </div>
                      </td>
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          <EllipsisVerticalIcon
                            strokeWidth={2}
                            className="h-5 w-5 text-inherit"
                          />
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card> */}
    </div>
  );
}

export default Tables;
