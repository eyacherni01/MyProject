import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SuggestiondetailsComponent } from './suggestiondetails/suggestiondetails.component';
import { UserFormComponent } from './user-form/user-form.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { UpdateFormComponent } from './update-form/update-form.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListSuggestionComponent,
    NotfoundComponent,
    SuggestiondetailsComponent,
    UserFormComponent,
    NavComponent,
    HomeComponent,
    SuggestionFormComponent,
    UpdateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
