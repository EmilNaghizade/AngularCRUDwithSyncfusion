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

}
