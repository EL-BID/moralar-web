import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.sass']
})
export class CourseViewComponent {
  @Input()
  course: any;

}
