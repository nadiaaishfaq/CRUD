import React, { useEffect, useState } from "react";
import { createUser, updateUserById } from "../api/index";

const initialState = {
  name: "",
  email: "",
  password: "",
  age: "",
  dob: "",
};
const Form = ({
  modal,
  setModal,
  openModal,
  closeModal,
  users,
  setUsers,
  currentId,
  setCurrentId,
}) => {
  //    console.log(modal)
  const [values, setValues] = useState(initialState);

  //   console.log("currentId", currentId)

  const handleSubmit = async (e) => {
    console.log("submit data");
    e.preventDefault();
    try {
      if (currentId !== 0) {
        const editUser = await updateUserById(currentId, values);
        console.log("edit user", editUser);
        setValues(editUser.data.user);
      } else {
        const response = await createUser(values);
        const data = response.data.user;
        console.log("response", response);
        setUsers((prev) => {
          return [...prev, { data }];
        });
        console.log("user", users);
        closeModal();
        setValues(initialState);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={openModal}>
        Add User
      </button>

      <div
        // className="modal fade"
        className={modal === true ? "d-block" : "d-none"}
        // className={`modal fade${modal===true ? "show" : ''}`}
        id="exampleModal"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {currentId ? "Update User" : "Add User"}
              </h5>
              <button
                type="button"
                className="btn-close"
                // data-bs-dismiss="modal"
                onClick={closeModal}
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    value={values.name}
                    onChange={(e) =>
                      setValues({ ...values, name: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                    value={values.email}
                    onChange={(e) =>
                      setValues({ ...values, email: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="**********"
                    value={values.password}
                    onChange={(e) =>
                      setValues({ ...values, password: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Age</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Age"
                    value={values.age}
                    onChange={(e) =>
                      setValues({ ...values, age: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Date of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    value={values.dob}
                    onChange={(e) =>
                      setValues({ ...values, dob: e.target.value })
                    }
                  />
                </div>
                <div className="modal-footer mt-3">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    // data-bs-dismiss="modal"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={closeModal}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
