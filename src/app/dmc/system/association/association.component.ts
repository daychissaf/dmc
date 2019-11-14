import {Component, OnInit} from '@angular/core';
import { AssociationService } from './association.service';
import { Association } from './association';

@Component({
  selector: 'app-layout',
  templateUrl: './association.component.html',
  styles: []
})
export class AssociationComponent implements OnInit {

  heading = 'Project page';
  subheading = 'This page is a poc for a CRUD operation (List as table, create as a simple form and edit as a simple editable form).';
  icon = 'pe-7s-graph text-success';

  associations: Association[];
  newAssociation: Association = new Association();
  editing: boolean = false;
  editingAssociation: Association = new Association();

  constructor(
      private associationService: AssociationService,
  ) {}

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.associationService.getAssociations()
        .then(association => this.associations = association );
  }

}
