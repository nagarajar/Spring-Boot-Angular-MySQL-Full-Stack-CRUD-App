import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  createEmployeeForm!: FormGroup;

  constructor(private employeeService:EmployeeService, private fb: FormBuilder, private router:Router){

  }

  ngOnInit(){
    this.createEmployeeForm = this.fb.group({
      firstName : [null, [Validators.required]],
      lastName : [null, [Validators.required]],
      emailId : [null, [Validators.required, Validators.email]]
    })
  }

  createEmployee(){
    console.log(this.createEmployeeForm.value);
    this.employeeService.createEmployee(this.createEmployeeForm.value).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl("");
    });
  }
}
