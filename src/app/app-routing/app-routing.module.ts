import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { TableComponent } from '../table/table.component';
import { EditarComponent } from '../editar/editar.component';

const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'editar', component: EditarComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
