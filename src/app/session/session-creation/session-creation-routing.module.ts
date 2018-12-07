import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SessionCreationComponent } from './session-creation.component';

const routes: Routes = [
  { path: '', component: SessionCreationComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SessionCreationRoutingModule { }