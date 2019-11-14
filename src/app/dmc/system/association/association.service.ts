import { Injectable } from '@angular/core';
import { Association } from './association';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AssociationService {

    private baseUrl = 'http://localhost:8080';
    private projectUrl = '/api/association';

    constructor(private http: HttpClient) { }

    getAssociations():  Promise<Association[]> {
        return this.http.get(this.baseUrl + this.projectUrl)
            .toPromise()
            .then(response => response as Association[])
            .catch(this.handleError);
    }

    createAssociation(donorData: Association): Promise<Association> {
        return this.http.post(this.baseUrl + this.projectUrl, donorData)
            .toPromise().then(response => response as Association)
            .catch(this.handleError);
    }

    updateAssociation(projectData: Association): Promise<Association> {
        return this.http.put(this.baseUrl + this.projectUrl + projectData.id, projectData)
            .toPromise()
            .then(response => response as Association)
            .catch(this.handleError);
    }

    deleteAssociation(id: number): Promise<any> {
        return this.http.delete(this.baseUrl + this.projectUrl + id)
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Some error occured', error);
        return Promise.reject(error.message || error);
    }
}