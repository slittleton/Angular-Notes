import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from '../employee';
import { Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url: string = "/assets/data/employees.json";
  constructor(private http: HttpClient) { }

  getEmployees() {


    return this.http
                .get<IEmployee[]>(this._url)
                .pipe(catchError(err=>{
                    console.log('ERRROR Getting Data Durring HTTP Request in employee.service')
                    return throwError(err);
                  }));

  }

}
