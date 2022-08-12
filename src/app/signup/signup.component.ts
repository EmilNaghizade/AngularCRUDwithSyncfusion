import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../models/user.model';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupRehber: FormGroup;
  singupObj = new UserModel();
  constructor(private auth: AuthService, private router: Router) { 
    this.signupRehber = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', Validators.required),

    })
  }

  ngOnInit(): void {
  }

  get email (){
    return this.signupRehber.get('email')
  }

  signUp(){
    this.singupObj.email = this.signupRehber.value.email;
    this.singupObj.password= this.signupRehber.value.password;
    this.auth.signUp(this.singupObj)
    .subscribe(res=>{
      alert(res.message)
      this.signupRehber.reset();
      this.router.navigate(['login'])
    })
  }


}
