import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { TranslateConfigService } from '../services/tranlate.service';
import { RehberService } from '../services/rehber.service';
import { Rehber } from '../models/rehber.model';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editRehber = new FormGroup({
    name: new FormControl('', [Validators.required]),
    pnumber: new FormControl('', [Validators.required]),
    hnumber: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    address: new FormControl(''),
    type: new FormControl('', [Validators.required]),

  })
 
  model: any ;
  public personType: Object= [
    {type: 'Friend'},
    {type: 'Family'},
    {type: 'Business'}
  ];
  edit: Rehber[]=[];
  lang!: any
  public dataFields: Object= {text:'type'}
  constructor(private rehber: RehberService,private api: ApiService, private formBuilder: FormBuilder, private activeRoute: ActivatedRoute, private translate: TranslateConfigService) { 
    
  }

  ngOnInit(): void {
    let id = this.activeRoute.snapshot.paramMap.get('id');
    this.rehber.getRehber(id as any).subscribe((result)=>{
      this.editRehber = new FormGroup({
        name: new FormControl(result['name'], [Validators.required]),
        pnumber: new FormControl(result['pnumber'], [Validators.required]),
        hnumber: new FormControl(result['hnumber'], [Validators.required]),
        email: new FormControl(result['email'], [Validators.required, Validators.email]),
        address: new FormControl(result['address']),
        type: new FormControl(result['type'], [Validators.required]),
      })
     
    })
    this.lang = localStorage.getItem('lang')
    console.log(this.lang)
    this.translate.changeLang(this.lang)
    console.log(this.activeRoute.snapshot.paramMap.get('id'))
  }
  

  collection(){
    console.log(this.editRehber.value)
    this.rehber.updateRehber(this.editRehber.value,this.activeRoute.snapshot.paramMap.get('id')).subscribe((res)=>{
      console.warn(res)
      window.location.reload()
    })
  }

  get email (){
    return this.editRehber.get('email')
  }
  
  get hnumber(){
    return this.editRehber.get('hnumber')

  }
  get pnumber(){
    return this.editRehber.get('pnumber')
  }
  

}

  
