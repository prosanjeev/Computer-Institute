// AdminPanel.js

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents, addStudent, updateStudent, deleteStudent } from "../../redux/actions/franchiseStudentsActions";
import { selectStudents, selectStudentsLoading, selectStudentsError } from "../../redux/selectors/franchiseStudentsSelectors";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const students = useSelector(selectStudents);
  const loading = useSelector(selectStudentsLoading);
  const error = useSelector(selectStudentsError);
  const [formData, setFormData] = useState({
    name: "",
    franchiseId: "",
    // Add other fields as needed
  });

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const handleAddStudent = () => {
    dispatch(addStudent(formData));
    setFormData({
      name: "",
      franchiseId: "",
      // Reset other fields
    });
  };

  const handleUpdateStudent = (id) => {
    dispatch(updateStudent(id, formData));
    // Reset form data after updating
    setFormData({
      name: "",
      franchiseId: "",
      // Reset other fields
    });
  };

  const handleDeleteStudent = (id) => {
    dispatch(deleteStudent(id));
  };

  return (
    <div>
    <h2>Manage Students</h2>
    {/* Form for adding a new student */}
    <div>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Franchise ID"
        value={formData.franchiseId}
        onChange={(e) => setFormData({ ...formData, franchiseId: e.target.value })}
      />
      <button onClick={handleAddStudent}>Add Student</button>
    </div>

    {/* Display students list */}
    <table>
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Franchise ID</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.studentName}</td>
            <td>{student.franchiseId}</td>
            <td>
              <button onClick={() => handleUpdateStudent(student.id)}>Update</button>
              <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {loading && <p>Loading...</p>}
    {error && <p>Error: {error}</p>}
  </div>
);
};

export default AdminPanel;