import React from "react";
import { useState, useEffect } from "react";
import EmpServices from "../services/EmpServices";
import { Link } from "react-router-dom";

export const ListEmp = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    EmpServices.getAllEmployees()
      .then((res) => {
        setEmployees(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteEmployee = (empId) => {
    console.log(empId);
    EmpServices.deleteEmployee(empId)
      .then((response) => {
        // after deleting user should navigate to listofemployee
        getAllEmployees();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center">List Employees</h2>
      <Link to="/add-employee" className="btn btn-primary my-3 btn-sm">
        Add Employee
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.emailId}</td>
              <td>
                <Link
                  className="btn btn-info btn-sm mx-2"
                  to={`/edit-employee/${emp.id}`}
                >
                  Update
                </Link>
                <button
                  className="btn btn-danger btn-sm mx-2"
                  onClick={() => deleteEmployee(emp.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
