import { Component, OnInit, ViewChild } from '@angular/core';
import { DataManager} from '@syncfusion/ej2-data';
import {NewRowPosition,SortService, EditSettingsModel, ToolbarItems, ToolbarService, EditService, CommandModel, CommandClickEventArgs, CommandColumnService, GridComponent, table  } from '@syncfusion/ej2-angular-grids';
import { ApiService } from '../services/api.service';
import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from '../services/tranlate.service';
import { RehberService } from '../services/rehber.service';
import { Rehber } from '../models/rehber.model';



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
  lang!: any;
  constructor(private rehber: RehberService,
    private activeRoute: ActivatedRoute,
    private api: ApiService,
    private router: Router, 
    private translate: TranslateConfigService, 
    private translateService: TranslateService) {

    // sourceFiles.files = ['sort.style.css']
  }

  ngOnInit(): void {
    this.getAllDetails();
    this.Commands = [{type:'Edit', buttonOption: {  iconCss: ' e-icons e-edit', cssClass: 'e-flat' } } ,
    { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } },
    ];
    
    
  }

  
  
  getAllDetails(){
    this.rehber.getAllRehbers()
    .subscribe({
      next:(res)=>{
        this.dataSource = new DataManager(res);
        console.log("calisiyor")
      },
      error:()=>{
        alert("Error while fetching data!")
      }
    })
  }
 
  
  

  onCommandClick(e:CommandClickEventArgs ) {
    if (e.target?.title === 'Edit') {
      this.router.navigate(['edit',((e.rowData as any).id )]).then(()=>{
        
        // window.location.reload();
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
    this.rehber.deleteRehber(item).subscribe({
      next:(res)=>{
        this.dataSource.remove(item,res)
      }
    })
  }
  
  

}
