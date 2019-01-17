import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-create-course',
  templateUrl: './form-create-course.component.html',
  styleUrls: ['./form-create-course.component.css']
})
export class FormCreateCourseComponent {

  categories = [
    { id: 1, name: "Development" },
    { id: 2, name: "Art" },
    { id: 3, name: "Games" }
  ];
  
  log(x) {
    console.log(x);
  }

  submit(f) {
    console.log(f);
  }

}
