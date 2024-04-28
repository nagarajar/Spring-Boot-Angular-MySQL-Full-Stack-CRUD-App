import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:9090/api/v1/employee/";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  createEmployee(employee:any):Observable<any>{
    return this.http.post(BASIC_URL+"create",employee);
  }

  getAllEmployees():Observable<any>{
    return this.http.get(BASIC_URL+'all');
  }

  getEmployeeById(id:number):Observable<any>{
    return this.http.get(`${BASIC_URL}${id}`);
  }

  updateEmployee(id:number,employee:any):Observable<any>{
    return this.http.put(`${BASIC_URL}update/${id}`,employee);
  }

  deleteEmployeeById(id:number):Observable<any>{
    return this.http.delete(`${BASIC_URL}${id}`);
  }
}
