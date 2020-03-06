import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { VieworderComponent } from './vieworder/vieworder.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';


const routes: Routes = [
  {path:'homepage',component:HomepageComponent,
  children:[{path:'contact-form',component:ContactFormComponent},{path:'vieworder',component:VieworderComponent},
  {path:'placeorder',component:PlaceorderComponent},]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
