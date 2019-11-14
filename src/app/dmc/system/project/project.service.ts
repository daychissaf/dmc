import { Injectable } from '@angular/core';
import { Project } from './project';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProjectService {

    private baseUrl = 'http://localhost:8080';
    private projectUrl = '/api/project';

    constructor(private http: HttpClient) { }

    getProjects():  Promise<Project[]> {
        return this.http.get(this.baseUrl + this.projectUrl)
            .toPromise()
            .then(response => response as Project[])
            .catch(this.handleError);
    }

    createProject(donorData: Project): Promise<Project> {
        return this.http.post(this.baseUrl + this.projectUrl, donorData)
            .toPromise().then(response => response as Project)
            .catch(this.handleError);
    }

    updateProject(projectData: Project): Promise<Project> {
        return this.http.put(this.baseUrl + this.projectUrl + projectData.id, projectData)
            .toPromise()
            .then(response => response as Project)
            .catch(this.handleError);
    }

    deleteProject(id: number): Promise<any> {
        return this.http.delete(this.baseUrl + this.projectUrl + id)
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Some error occured', error);
        return Promise.reject(error.message || error);
    }
}