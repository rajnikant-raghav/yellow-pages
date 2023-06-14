import React, { useState } from "react";

const AddData = () => {
  const [rows, setRows] = useState([
    {
      userName: "",
      age: "",
      dob: "",
      uid: "",
      mobile: "",
      gender: "",
    },
  ]);

  const handleClick = (e, idx) => {
    const { name, value } = e.target;
    const updateRow = [...rows];
    updateRow[idx][name] = value;
    setRows(updateRow);
  };
  const handleAddRow = (e) => {
    setRows([
      ...rows,
      {
        userName: "",
        age: "",
        dob: "",
        uid: "",
        mobile: "",
        gender: "",
      },
    ]);
  };
  const handleSave = (e,idx)=>{
    e.preventDefault();
    const row = rows[idx];
    localStorage.setItem(row.uid,JSON.stringify(row));
  }
  
  const handleDelete = (e,idx)=>{
    e.preventDefault();
    const row = rows[idx];
    const updatedRows = rows.filter(val=>val.uid != row.uid);
    setRows(updatedRows);
    localStorage.removeItem(row.uid)
  }
  return (
    <div className="add_container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>DOB</th>
            <th>Aadhar No.</th>
            <th>Mobile No.</th>
            <th>Gender</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr>
              <td>
                <input
                  type="text"
                  name="userName"
                  value={row.userName}
                  onChange={(e) => handleClick(e, idx)}
                  placeholder="Enter name"
                />
              </td>
              <td>
                <input
                  type="number"
                  name="age"
                  value={row.age}
                  onChange={(e) => handleClick(e, idx)}
                  placeholder="Enter Age"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="dob"
                  value={row.dob}
                  onChange={(e) => handleClick(e, idx)}
                  placeholder="Enter DOB"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="uid"
                  value={row.uid}
                  onChange={(e) => handleClick(e, idx)}
                  placeholder="Enter Aadhar"
                />
              </td>
              <td>
                <input
                  type="number"
                  name="number"
                  value={row.number}
                  onChange={(e) => handleClick(e, idx)}
                  placeholder="Enter Mobile"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="gender"
                  value={row.gender}
                  onChange={(e) => handleClick(e, idx)}
                  placeholder="Enter Gender"
                />
              </td>
              <td>
                <button onClick={(e)=>handleSave(e,idx)}>Save</button>
                <button onClick={(e)=>handleDelete(e,idx)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="submit_btn" onClick={(e) => handleAddRow(e)}>Add Row</button>
    </div>
  );
};

export default AddData;
