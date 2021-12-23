import { Routes, RouterModule } from '@angular/router'
import { CadastrarfuncionarioComponent } from './cadastrarfuncionario/cadastrarfuncionario.component';
import { TableComponent } from './table/table.component';
const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'cadastrar', component: CadastrarfuncionarioComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
export const RoutingModule = RouterModule.forRoot(routes);