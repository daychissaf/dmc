import {Component, Input} from '@angular/core';


enum VUE {
  LIST,
  CREATE,
  EDIT
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  @Input() entities;
  @Input() tableHeaders;
}
