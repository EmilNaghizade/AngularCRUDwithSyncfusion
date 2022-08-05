import { Component, OnInit, ViewChild } from '@angular/core';
import { DataManager} from '@syncfusion/ej2-data';
import {NewRowPosition,SortService, EditSettingsModel, ToolbarItems, ToolbarService, EditService, CommandModel, CommandClickEventArgs, CommandColumnService, GridComponent  } from '@syncfusion/ej2-angular-grids';
import { ApiService } from '../services/api.service';
import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { Router } from '@angular/router';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [SortService, ToolbarService,EditService,CommandColumnService]
})
export class TableComponent implements OnInit {


  @ViewChild('grid') public grid!: GridComponent; 
  public dropDown!: DropDownListComponent;
  initialSort!: Object;
  dataSource!: DataManager;

  Commands!:CommandModel[];

  public editOption: EditSettingsModel = {allowEditing: true, allowDeleting:true ,mode: 'Normal'};
  public toolbarOption : ToolbarItems[] = ['Edit','Delete','Update','Cancel'];
  constructor(private api: ApiService,private router: Router) { 
    // sourceFiles.files = ['sort.style.css']
   
  }

  ngOnInit(): void {
    // this.initialSort = {
    //   columns: [{ field: 'name', direction: 'Ascending' },
    //   { field: 'pnumber', direction: 'Descending' }]
    // };
    this.getAllDetails();
    this.Commands = [{type:'Edit', buttonOption: {  iconCss: ' e-icons e-edit', cssClass: 'e-flat' } } ,
    { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } },
  ]
    
  }

 
  
  getAllDetails(){
    this.api.getRehber()
    .subscribe({
      next:(res)=>{
        this.dataSource = new DataManager(res);
        
      },
      error:()=>{
        alert("Error while fetching data!")
      }
    })
  }
  

  onCommandClick(e:CommandClickEventArgs ) {
    console.log()
    if (e.target?.title === 'Edit') {
      this.router.navigate(['edit',((e.rowData as any).id )]).then(()=>{
        window.location.reload();
      });
      
    }else{
      this.deletePerson((e.rowData as any).id)
      this.refresh()
    }
  }
  refresh(){
    window.location.reload();
  }

  deletePerson(item:any){
    this.api.deleteRehber(item).subscribe({
      next:(res)=>{
        this.dataSource.remove(item,res)
        
      }
    })
  }

  

}
