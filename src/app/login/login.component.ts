import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserModel } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginRehber: FormGroup;
  invalidLogin: boolean;
  loginObj = new UserModel();
  constructor(private auth: AuthService, private router: Router) { 
    this.loginRehber = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  get email (){
    return this.loginRehber.get('email')
  }

  login(){
    this.loginObj.email = this.loginRehber.value.email;
    this.loginObj.password = this.loginRehber.value.password;
    this.auth.login(this.loginRehber.value)
    .subscribe(res=>{
      alert(res.message)
      let token = res
      console.log(token)  
      localStorage.setItem('jwt',res.jwtToken);
      this.invalidLogin = false
      this.router.navigate(['table'])
    },err =>{
      this.invalidLogin = true
    });
  

}
}
