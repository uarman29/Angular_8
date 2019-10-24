import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit 
{
  title = "List of courses";
  courses;
  imageUrl = "";
  isActive = true;

  bindedData = "";

  constructor(service: CoursesService)
  {
    //let service = new CoursesService()
    this.courses = service.getCourses();
  }

  f = () => console.log("Button was clicked");

  mousePos = ($event) => console.log($event);

  submit = () => console.log("Enter was pressed");

  logData = ($event) => console.log($event.target.value);
  logDataTemplate = (data) => console.log(data);
  logDataTwoWay = () => console.log(this.bindedData);

  ngOnInit() {
  }

  course = 
  {
    title: "Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2019, 10, 3)
  }

  text = "My name is My name is My name is My name is My name is My name is";

}
