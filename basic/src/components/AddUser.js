import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import useAddUser from "../hooks/useAddUser";

const AddUser = ({ show, onClose, onSave }) => {
  const [user, setUser] = useState({ firstName: "", lastName: "" });
  const addUser = useAddUser(user);

  const updateUser = value => {
    setUser({ ...user, ...value });
  };

  const onCloseModal = () => {
    setUser({ firstName: "", lastName: "" });
    onClose();
  };

  const onSaveUser = () => {
    addUser();
    onCloseModal();
  };

  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Add User</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group controlId="firstName">
            <Form.Control
              type="input"
              placeholder="First Name"
              value={user.firstName}
              onChange={e => updateUser({ firstName: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="lastName">
            <Form.Control
              type="input"
              placeholder="Last Name"
              value={user.lastName}
              onChange={e => updateUser({ lastName: e.target.value })}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={onSaveUser}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

AddUser.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default AddUser;
