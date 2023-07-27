/**
 * React is not concerened with http library we need to use third party library to make rest API call in rest API call
 * installing axios library ->
 *  npm install axios --save (don't forget --save becase it will add entry in package.json file)
 *
 * axois internally make a rest API call and returns a promise object to the component
 */

import axios from "axios";
const EMPLOYEE_BASE_REST_API_URL = "http://localhost:8080/api/v1/employees";
class EmployeeService {
  getAllEmployees() {
    return axios.get(EMPLOYEE_BASE_REST_API_URL);
  }

  createEmployee(employee) {
    return axios.post(EMPLOYEE_BASE_REST_API_URL, employee);
  }

  getEmployeeById(employeeId) {
    return axios.get(EMPLOYEE_BASE_REST_API_URL + "/" + employeeId);
  }

  updateEmployee(empId, emp) {
    return axios.put(EMPLOYEE_BASE_REST_API_URL + "/" + empId, emp);
  }

  deleteEmployee(empId) {
    return axios.delete(EMPLOYEE_BASE_REST_API_URL + "/" + empId);
  }
}

export default new EmployeeService();
