import {Component, Input} from '@angular/core';


enum VUE {
  LIST,
  CREATE,
  EDIT
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
})
export class CreateComponent {

  @Input() action;
  @Input() object
  @Input() model
}
