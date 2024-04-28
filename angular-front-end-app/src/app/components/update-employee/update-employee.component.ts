import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  constructor(private activatedRoute:ActivatedRoute,private employeeService:EmployeeService, private fb:FormBuilder, private router:Router){}

  updateEmployeeForm!: FormGroup;

  id:number = this.activatedRoute.snapshot.params['id'];

  ngOnInit(){
    this.getEmployeeById(this.id);
    this.updateEmployeeForm = this.fb.group({
      firstName : [null, [Validators.required]],
      lastName : [null, [Validators.required]],
      emailId : [null, [Validators.required, Validators.email]]
    })
  }

  getEmployeeById(id:number){
    this.employeeService.getEmployeeById(id).subscribe((res) => {
      console.log(res);
      this.updateEmployeeForm.patchValue(res);
    });
  }

  updateEmployee(){
    console.log(this.updateEmployeeForm.value);
    this.employeeService.updateEmployee(this.id,this.updateEmployeeForm.value).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl("");
    });
  }
}
