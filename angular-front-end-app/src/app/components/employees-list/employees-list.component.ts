import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {

    employees: any = [];

    constructor(private employeeService:EmployeeService){}

    ngOnInit(){
      this.getAllEmployees();
    }

    getAllEmployees(){
      this.employeeService.getAllEmployees().subscribe((res) => {
        console.log(res);
        this.employees = res;
      })
    }

    deleteEmployeeById(id:number){
      this.employeeService.deleteEmployeeById(id).subscribe((res: any) => {
        console.log(res);
        console.log(res.message);
        this.getAllEmployees();
      });
    }
    
}
