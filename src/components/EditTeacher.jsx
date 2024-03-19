import { useState } from "react";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const EditTeacher = ({
  openEdit,
  setOpenEdit,
  selectedTeacher,
  fetchTeachers,
}) => {
  const [editedTeacher, setEditedTeacher] = useState({
    firstName: selectedTeacher.firstName,
    lastName: selectedTeacher.lastName,
    age: selectedTeacher.age,
  });

  const handleClose = () => {
    setOpenEdit(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTeacher({
      ...editedTeacher,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.put(
        `https://65bb677f52189914b5bc02b7.mockapi.io/teachers/${selectedTeacher.id}`,
        editedTeacher
      );
      fetchTeachers();
      setOpenEdit(false);
    } catch (error) {
      console.error("Error updating teacher:", error);
    }
  };

  return (
    <Dialog open={openEdit} onClose={handleClose}>
      <DialogTitle>Edit Teacher</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="First Name"
          type="text"
          fullWidth
          name="firstName"
          value={editedTeacher.firstName}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Last Name"
          type="text"
          fullWidth
          name="lastName"
          value={editedTeacher.lastName}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Age"
          type="number"
          fullWidth
          name="age"
          value={editedTeacher.age}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTeacher;
