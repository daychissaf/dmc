import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './project.component.html',
  styles: []
})
export class ProjectComponent implements OnInit {

  heading = 'Project page';
  subheading = 'This page is a poc for a CRUD operation (List as table, create as a simple form and edit as a simple editable form).';
  icon = 'pe-7s-graph text-success';

  constructor() {
  }

  ngOnInit() {
  }

}
