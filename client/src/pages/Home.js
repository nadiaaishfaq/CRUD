import React, { useState } from "react";
import Form from "../components/Form";
import Table from "../components/Table";

const Home = () => {
  const [modal, setModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentId, setCurrentId] = useState(0);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  return (
    <>
      <div className="container mt-3">
        <h1>CRUD Operations</h1>
        <Form
          modal={modal}
          setModal={setModal}
          openModal={openModal}
          closeModal={closeModal}
          users={users}
          setUsers={setUsers}
          currentId={currentId}
          setCurrentId={setCurrentId}
        />
        <Table
          modal={modal}
          setModal={setModal}
          openModal={openModal}
          closeModal={closeModal}
          users={users}
          setUsers={setUsers}
          currentId={currentId}
          setCurrentId={setCurrentId}
        />
      </div>
    </>
  );
};

export default Home;
