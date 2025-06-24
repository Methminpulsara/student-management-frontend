import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Student from "../models/student";


@Injectable({
  providedIn: 'root',
})
export default class StudentService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:3000/api/students';

  getAll():Observable<Student[]>{
     return this.http.get<Student[]>(`${this.baseUrl}`);
  }

  create (student:Student):Observable<Student>{
    return this.http.post<Student>(`${this.baseUrl}`,student);
  }

  update(id:number,student:Student):Observable<Student>{
    return this.http.put<Student>(`${this.baseUrl}/${id}`,student);
  }

  delete(id:number){
    return this.http.delete<{message:string}>("http://localhost:3000/api/students/"+id);
  }



}

