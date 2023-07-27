package com.ems.controller;

import java.util.List;

import com.ems.exception.ResourceNotFoundException;
import com.ems.model.Employee;
import com.ems.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees") // common base url for all these rest API
public class EmployeeController {

    @Autowired
    private EmployeeRepository repository;

    @GetMapping
    public List<Employee> getAllEmployee() {
        return repository.findAll();
    }

    // Create Employee Rest API
    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee) {
        return repository.save(employee);
    }

    // Get Single employee by Id Rest API
    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable long id) {
        Employee employee = repository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Employee Not Exist with Id : " + id)
        );
        // ResponseEntiry internally specifies 200 status code we don't need to specify
        return ResponseEntity.ok(employee);
    }

    // update Employee Rest API
    @PutMapping("{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable long id, @RequestBody Employee empDetails) {
        Employee updateEmp = repository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Employee not exist with id : " + id)
        );

        updateEmp.setFirstName(empDetails.getFirstName());
        updateEmp.setLastName(empDetails.getLastName());
        updateEmp.setEmailId(empDetails.getEmailId());
        repository.save(updateEmp);

        return ResponseEntity.ok(updateEmp);
    }

    // delete Employee Rest API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){
        Employee emp = repository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Employee not Exists with Id : " + id)
        );
        repository.delete(emp);
        return ResponseEntity.ok(HttpStatus.NO_CONTENT);
    }
}
