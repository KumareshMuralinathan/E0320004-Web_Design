import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApjComponent } from './apj/apj.component';
import { KailashComponent } from './kailash/kailash.component';
import { VisvesvarayaComponent } from './visvesvaraya/visvesvaraya.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SupportusComponent } from './supportus/supportus.component';




const routes: Routes = [
  {path: "APJ", component: ApjComponent},
  {path: "Kailash", component: KailashComponent},
  {path: "Visvesvaraya", component: VisvesvarayaComponent},
  {path: "ContactUs", component: ContactusComponent},
  {path: "supportus", component: SupportusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
