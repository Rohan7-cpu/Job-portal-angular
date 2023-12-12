import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = 'http://localhost:5000/Job/create'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  postJob(jobData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, jobData);
  }
}
