import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponent } from './page/first/first.component';
import { SecondComponent } from './page/second/second.component';

const routes: Routes = [
  { path: 'home', component: FirstComponent },
  { path: 'chat', component: SecondComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
