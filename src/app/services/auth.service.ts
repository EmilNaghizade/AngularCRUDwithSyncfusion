import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'https://localhost:7167/api/Login'
  constructor(private http: HttpClient) { }

  signUp(rehberObj:any){
    return this.http.post<any>(this.baseUrl+"/signup", rehberObj);
  }

  login(rehberObj: any){
    return this.http.post<any>(this.baseUrl+"/login", rehberObj);
  }
}
