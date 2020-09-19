import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PeopleComponent } from './people/people.component';
import { SignupComponent } from './signup/signup.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {path:"",redirectTo:"movies",pathMatch:"full"},
  {path:"movies",component:MoviesComponent},
  {path:"tv",component:TvComponent},
  {path:"people",component:PeopleComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
