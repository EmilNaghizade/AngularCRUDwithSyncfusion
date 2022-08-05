import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormControl, FormGroup, Validators, FormsModule, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public dataFields: Object= {text:'type'}
  public personType: Object= [
    {type: 'Friend'},
    {type: 'Family'},
    {type: 'Business'}
  ];
  editData  : any 

  rehberForm: FormGroup;
  constructor(private api: ApiService){
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
  }

  onAddPerson(){   
        if(this.rehberForm.valid){
          this.api.postRehber(this.rehberForm.value)
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
