import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormControl, FormGroup, Validators, FormsModule, AbstractControl } from '@angular/forms';
import { TranslateConfigService } from '../services/tranlate.service';
import { RehberService } from '../services/rehber.service';
import { ObservableLike } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public fields: Object={text: 'type'}
  public personType: Object= [
    {type: 'Friend'},
    {type: 'Family'},
    {type: 'Business'}
  ];
  
  editData  : any 
  lang!: any
  rehberForm: FormGroup;
  constructor(private tranlateConfig: TranslateConfigService,private rehber: RehberService,private api: ApiService, private translate: TranslateConfigService){
    this.rehberForm = new FormGroup({
      name: new FormControl('', Validators.required),
      pnumber: new FormControl('', [Validators.required]),
      hnumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl(''),
      type: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang')
    console.log(this.lang)
    this.translate.changeLang(this.lang)
    
  }

  onAddPerson(){   
        if(this.rehberForm.valid){
          this.rehber.addRehber(this.rehberForm.value)
          .subscribe({
            next:(res)=>{
              alert("Person added successfully");
              this.refresh()
            },
            error:()=>{
              alert("Error while adding person")
            }
          })
        }
      
    }
    refresh(){
      window.location.reload();
    }

    get email (){
      return this.rehberForm.get('email')
    }
    
    get hnumber(){
      return this.rehberForm.get('hnumber')

    }
    get pnumber(){
      return this.rehberForm.get('pnumber')
    }
    


  
}
