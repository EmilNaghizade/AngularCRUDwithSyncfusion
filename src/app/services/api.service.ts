import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postRehber(data: any){
    return this.http.post<any>("http://localhost:3000/rehber/",data, {
      headers: new HttpHeaders({ "Authorization": "Bearer "+localStorage.getItem('jwt')})
    });
  }

  getRehber(){
    return this.http.get<any>("http://localhost:3000/rehber/",{
      headers: new HttpHeaders({ "Authorization": "Bearer "+localStorage.getItem('jwt')})
    });
  }
  getRehberById(id:number){
    return this.http.get<any>("http://localhost:3000/rehber/"+id,{
      headers: new HttpHeaders({ "Authorization": "Bearer "+localStorage.getItem('jwt')})
    });
  }
  
  putRehber(data:any,id:any){
    return this.http.put<any>("http://localhost:3000/rehber/"+id,data,{
      headers: new HttpHeaders({ "Authorization": "Bearer "+localStorage.getItem('jwt')})
    })
  }

  deleteRehber(id:number){
    return this.http.delete<any>("http://localhost:3000/rehber/"+id,{
      headers: new HttpHeaders({ "Authorization": "Bearer "+localStorage.getItem('jwt')})
    })

  }
}
