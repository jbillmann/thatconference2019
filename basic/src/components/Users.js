import React, { useState } from "react";
import { Button } from "react-bootstrap";
import AddUser from "./AddUser";
import useUsers from "../hooks/useUsers";

const Users = () => {
  const { loading, data, error } = useUsers();
  const [showModal, setShowModal] = useState(false);

  const onAddUser = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  if (error) {
    return (
      <pre>
        {error.graphQLErrors.map(({ message }, i) => (
          <span key={i}>{message}</span>
        ))}
      </pre>
    );
  }

  if (loading) {
    return <div className="spinner" />;
  }

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-12">
          <div className="float-left">
            <h2>Users</h2>
          </div>
          <div className="float-right">
            <Button onClick={onAddUser}>Add User</Button>
          </div>
        </div>
      </div>
      <div />
      <div className="row">
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
            </tr>
          </thead>
          <tbody>
            {data.map(u => (
              <tr key={u.id}>
                <th scope="row">{u.id}</th>
                <td>{u.first_name}</td>
                <td>{u.last_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AddUser show={showModal} onClose={onCloseModal} />
    </React.Fragment>
  );
};

export default Users;
