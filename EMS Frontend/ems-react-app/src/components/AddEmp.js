import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import EmpServices from "../services/EmpServices";
import { useEffect } from "react";

export const AddEmp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const saveOrUpdateEmp = (e) => {
    // whenever we submitt the form we are not going to refresh page , in order to prevent this we have preventDefault()
    e.preventDefault();
    const employee = { firstName, lastName, emailId };

    if (id) {
      EmpServices.updateEmployee(id, employee)
        .then((response) => {
          navigate("/employees");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log(employee);

      EmpServices.createEmployee(employee)
        .then((response) => {
          console.log(response.data);
          navigate("/employees");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    EmpServices.getEmployeeById(id)
      .then((res) => {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmailId(res.data.emailId);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    if (id) {
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      return <h2 className="text-center">Add Employee</h2>;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 my-5">
          {title()}
          <div className="card-body">
            <form>
              <div className="form-group mb-2 my-3">
                <label className="form-label">First Name : </label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  name="firstName"
                  className="form-control"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>
              </div>
              <div className="form-group mb-2 my-3">
                <label className="form-label">Last Name : </label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  name="lastName"
                  className="form-control"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
              </div>
              <div className="form-group mb-2 my-3">
                <label className="form-label">Email Id : </label>
                <input
                  type="text"
                  placeholder="Enter Your Email Id"
                  name="emailId"
                  className="form-control"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                ></input>
              </div>
              <button
                className="btn btn-success my-3"
                onClick={(e) => saveOrUpdateEmp(e)}
              >
                Submitt
              </button>
              <Link to="/employees" className="btn btn-danger mx-2">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
