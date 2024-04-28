package com.employee.controller;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employee.entity.Employee;
import com.employee.service.IEmployeeService;

@CrossOrigin(origins = "http://localhost:5000")
@RestController
@RequestMapping("/api/v1/employee/")
public class EmployeeController {
	
	@Autowired
	IEmployeeService employeeService;
	
	@PostMapping("create")
	public Employee createEmplyee(@RequestBody Employee employee) {
		return employeeService.createEmployee(employee);
	}
	
	@PutMapping("update/{id}")
	public Employee updateEmployee(@PathVariable long id, @RequestBody Employee employee) { 
		return employeeService.updateEmployee(id, employee);
	}
	
	@GetMapping("{id}")
	public Employee getEmployeeById(@PathVariable long id) { 
		return employeeService.getEmployeeById(id);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<?> deleteEmployeeById(@PathVariable long id) {
		String message = employeeService.deleteEmployeeById(id);
	    return ResponseEntity.ok().body(Collections.singletonMap("message", message));
	}
	
	@GetMapping("all")
	public List<Employee> getAllEmployees() { 
		return employeeService.getAllEmployee();
	}
}
