import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';


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
  public dataFields: Object= {text:'type'}
  constructor(private api: ApiService, private formBuilder: FormBuilder, private activeRoute: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    let id = this.activeRoute.snapshot.paramMap.get('id');
    this.api.getRehberById(id as any).subscribe((result)=>{
      this.editRehber = new FormGroup({
        name: new FormControl(result['name'], [Validators.required]),
        pnumber: new FormControl(result['pnumber'], [Validators.required]),
        hnumber: new FormControl(result['hnumber'], [Validators.required]),
        email: new FormControl(result['email'], [Validators.required, Validators.email]),
        address: new FormControl(result['address']),
        type: new FormControl(result['type'], [Validators.required]),
      
      })
     
    })
  }
  

  collection(){
    console.log(this.editRehber.value)
    this.api.putRehber(this.editRehber.value,this.activeRoute.snapshot.paramMap.get('id')).subscribe((res)=>{
      console.warn(res)
      
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

  
