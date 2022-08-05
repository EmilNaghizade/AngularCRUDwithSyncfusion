import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommandColumnService, EditService, GridModule, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { MaskedTextBoxModule, TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ReactiveFormsModule } from '@angular/forms';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    GridModule,
    TextBoxModule,
    MaskedTextBoxModule,
    ButtonModule,
    ReactiveFormsModule,
    DropDownListModule,
    HttpClientModule,
    ButtonModule
    
    

  ],
  providers: [EditService, ToolbarService,CommandColumnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
