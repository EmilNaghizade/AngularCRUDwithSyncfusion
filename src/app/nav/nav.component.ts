import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from '../services/tranlate.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // public language: Object=[
  //   {lan: 'en'},
  //   {lan: 'tr'}
  // ]
  // public dataFields: Object= {text:'lan'}
  lang!: any;
  isLogin = true
  constructor(private translate: TranslateConfigService, private translateService: TranslateService) {

    
  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang')
  }


  changeLang(lang){
    localStorage.setItem('lang',lang.target.value)
    this.translateService.use(lang.target.value)
 
    window.location.reload()
  }

  logOut(){
    localStorage.removeItem('jwt');
    window.location.reload();
  }

  isUserAuth(){
    const token: string = localStorage.getItem('jwt');
    if(token){
      return false
    }else{
      return true
    }
  }
}
