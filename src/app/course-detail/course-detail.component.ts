import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent {
  course:string = "";

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe(params => this.course = params['course']);
    this.route.params.subscribe(params => console.log(params));
  }
}
