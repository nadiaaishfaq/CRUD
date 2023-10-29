import React, { useEffect } from "react";
import { getUser, deleteUser} from "../api/index";

const Table = ({ users, setUsers, openModal, currentId, setCurrentId }) => {
  const fetchUsers = async () => {
    const response = await getUser();
    setUsers(response.data.users);
  };

  useEffect(() => {
    fetchUsers();
  }, [users]);

  const onEdit = (id) => {
    console.log('id', id)
    setCurrentId(id)
    openModal()
  }

  return (
    <>
      <div className="container mt-3">
        <table className="table table-hover table-bordered mt-3">
          <thead className="table-dark">
            <tr className="text-center">
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Date of Birth</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>{user.dob}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => onEdit(user._id)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteUser(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
