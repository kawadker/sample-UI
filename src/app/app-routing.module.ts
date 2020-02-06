import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { TemplateComponent } from './components/template/template.component';
import { PNFComponent } from './components/pnf/pnf.component';

const routes: Routes = [

  {
  path: 'home', component: HomeComponent,
  children: [
    { path: 'form', component: FormComponent },
     { path: 'template', component: TemplateComponent },
     { path: '**', component: PNFComponent }

    ]
},
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: '**', component: PNFComponent }
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
