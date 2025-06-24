import {Component, OnInit} from '@angular/core';
import {CommonModule}  from '@angular/common';
import StudentService from '../../service/stuendService';
import {FormsModule} from '@angular/forms';
import Student from '../../models/student';

@Component({
  selector: 'app-manage-student',
  imports: [
     CommonModule, FormsModule
  ],
  templateUrl: './manage-student.component.html',
  styleUrl: './manage-student.component.css'
})
export class ManageStudentComponent implements OnInit{


  constructor(private studentService: StudentService) {}

  public studentList : Student[]=[];
  public filteredList : Student[]=[];
  public  isUpdateModalOpen: boolean = false;
  public search:string='';


  public student :Student={
    name:'',
    id:0,
    age:1,
    details:""
  }

  public updateStudent= {
    name:'',
    details : "",
    age: 1,
  }

  ngOnInit(): void {
       this.getAllStudents();
    }

  delete(id: number){
   this.studentService.delete(id).subscribe(
     res=>{alert(res.message)
      this.getAllStudents();
     },
     err => alert("Error getting students!")
   )
  }

  closeModel(){
    this.isUpdateModalOpen = false;
  }
  openModal(student:Student){

    this.student = student;

    this.updateStudent.name=student.name;
    this.updateStudent.age=student.age;
    this.updateStudent.details = student.details;
    this.isUpdateModalOpen = true;
  }

  update(){
    const updatedStudent : Student={
      ...this.student,
      name:this.updateStudent.name ? this.updateStudent.name.trim() :'',
      details:this.updateStudent.details ? this.updateStudent.details.trim() :'',
      age:this.updateStudent.age
    };
    this.studentService.update(this.student.id, updatedStudent).subscribe(
      res=>{alert(res.message);this.getAllStudents();
      this.closeModel()
      },
      err => alert("Error getting students!")
    );
  }


  getAllStudents() {
    this.studentService.getAll().subscribe(
      res=>{
        this.studentList = res;
        this.filterStudent()
        console.log(this.studentList);
      }
    )
  }


  filterStudent(){
    this.filteredList = this.studentList.filter(student=>(
      student.name.toLowerCase().includes((this.search.toLowerCase())) ||
        student.details.toLowerCase().includes((this.search.toLowerCase()))
    ))
  }

  onSearchChange(){
    this.filterStudent()
  }


}
