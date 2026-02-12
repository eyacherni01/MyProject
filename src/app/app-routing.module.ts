import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  //{path:'', redirectTo:'home', pathMatch:'full'},
  //{path:'home',component:HomeComponent},
  {path:'listsugg',component:ListSuggestionComponent},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }