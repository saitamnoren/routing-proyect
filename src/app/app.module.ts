import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CourseComponent } from './course/course.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

//Home
//Contact
//About

const routes: Routes = [
  {
    path:'',
    component: HomeComponent 
  },
  {
    path:'contact',
    component: ContactComponent 
  },
  {
    path:'about',
    component: AboutComponent 
  }, 
   {
    path:'redirecciona',
    redirectTo: '/about',
    pathMatch:'full' 
  },  
  {
    path:'course', 
    component: CourseComponent 
  }, 
  {
    path:'course/:course/:id',
    component: CourseDetailComponent 
  }, 
  {
    path:'**',
    component: PageNotFoundComponent 
  }, 
  
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    PageNotFoundComponent,
    CourseComponent,
    CourseDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
