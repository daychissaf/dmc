import {Component, OnInit} from '@angular/core';
import { ProjectService } from './project.service';
import { Project } from './project';

enum VUE {
  LIST,
  CREATE,
  EDIT
}

@Component({
  selector: 'app-system-project',
  templateUrl: './project.component.html',
  styles: []
})

export class ProjectComponent implements OnInit {

  heading = 'Project page';
  subheading = 'This page is a poc for a CRUD operation (List as table, create as a simple form and edit as a simple editable form).';
  icon = 'pe-7s-graph text-success';

  projects: Project[];
  vue: VUE;
  newProject: Project = new Project();
  editing: boolean = false;
  editingProject: Project = new Project();

  constructor(
      private projectService: ProjectService,
  ) {
    this.vue = VUE.LIST;
  }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects()
        .then(projects => this.projects = projects );
  }


  //VUE MANAGEMENT
  switchToCreateVue=function(){
    this.vue = VUE.CREATE;
  }

  switchToListVue=function(){
    this.vue = VUE.LIST;
  }

  switchToEditVue=function(){
    this.vue = VUE.EDIT;
  }

  showListVue(){
    return this.vue == VUE.LIST;
  }

  showCreateFormVue(){
    return this.vue == VUE.CREATE;
  }

  showEditFormVue(){
    return this.vue == VUE.EDIT;
  }
}
