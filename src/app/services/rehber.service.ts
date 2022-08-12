import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rehber } from '../models/rehber.model';

@Injectable({
  providedIn: 'root'
})
export class RehberService {
  baseUrl = 'https://localhost:7167/api/rehber'

  constructor(private http: HttpClient) { }

  //Get All Rehber
  getAllRehbers(): Observable<Rehber[]>  {
    return this.http.get<Rehber[]>(this.baseUrl, {
      headers: new HttpHeaders({ "Authorization": "Bearer "+localStorage.getItem('jwt')})
    })
  }
  getRehber(id:string): Observable<Rehber[]>{
    return this.http.get<Rehber[]>(this.baseUrl + '/'+id, {
      headers: new HttpHeaders({ "Authorization": "Bearer "+localStorage.getItem('jwt')})
    })
  }

  addRehber(rehber: Rehber): Observable<Rehber>{
    rehber.id='00000000-0000-0000-0000-000000000000';
    return this.http.post<Rehber>(this.baseUrl, rehber, {
      headers: new HttpHeaders({ "Authorization": "Bearer "+localStorage.getItem('jwt')})
    });
  }

  updateRehber(data,id:string):Observable<Rehber>{
    return this.http.put<Rehber>(this.baseUrl + '/'+ id, data, {
      headers: new HttpHeaders({ "Authorization": "Bearer "+localStorage.getItem('jwt')})
    })

  }

  deleteRehber(id: string): Observable<Rehber>{
    return this.http.delete<Rehber>(this.baseUrl + '/'+ id, {
      headers: new HttpHeaders({ "Authorization": "Bearer "+localStorage.getItem('jwt')})
    })
  }
}
