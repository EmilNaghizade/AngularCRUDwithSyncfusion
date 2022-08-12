import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { SignupComponent } from './signup/signup.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path:'', redirectTo:'table',pathMatch:'full'},
  {path:'table', component: TableComponent, canActivate: [AuthGuard]},
  {path:'create', component: CreateComponent, canActivate: [AuthGuard]},
  {path:'edit/:id', component: EditComponent, canActivate: [AuthGuard]},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
