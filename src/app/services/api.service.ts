import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postRehber(data: any){
    return this.http.post<any>("http://localhost:3000/rehber/",data);
  }

  getRehber(){
    return this.http.get<any>("http://localhost:3000/rehber/");
  }
  getRehberById(id:number){
    return this.http.get<any>("http://localhost:3000/rehber/"+id);
  }
  
  putRehber(data:any,id:any){
    return this.http.put<any>("http://localhost:3000/rehber/"+id,data)
  }

  deleteRehber(id:number){
    return this.http.delete<any>("http://localhost:3000/rehber/"+id)

  }
}
