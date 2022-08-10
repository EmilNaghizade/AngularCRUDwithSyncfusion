import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {
  lang!: any
  constructor(private translateService: TranslateService,) {
    this.lang = localStorage.getItem('lang');
    console.log(this.lang);
    this.changeLang(this.lang ? this.lang : 'en');
    
  }

  changeLang(type: string){
    this.translateService.use(type);
  }
}
