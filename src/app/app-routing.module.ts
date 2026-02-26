import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SuggestiondetailsComponent } from './suggestiondetails/suggestiondetails.component';
import { UserFormComponent } from './user-form/user-form.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'listsugg',component:ListSuggestionComponent},
  {path:'adduser',component:UserFormComponent},
  {path:'suggDetails/:id',component:SuggestiondetailsComponent},
  {path:'**', component:NotfoundComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }