import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../deletarfuncionario/deletarfuncionario.component';
import { EditarComponent } from '../editarfuncionario/editarfuncionario.component';
import { Funcionario } from '../models/Funcionario';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  funcionarios: Funcionario[] = [];
  dtOptions: DataTables.Settings = {};

  constructor(
    private httpService: HttpService, public dialog: MatDialog) {
    this.httpService.getFuncionarios().subscribe(data => {
      this.funcionarios = data
      $(function () {
        $("#funcionarios").DataTable({
          responsive: true,
          language: {
            url: "//cdn.datatables.net/plug-ins/1.10.19/i18n/Portuguese-Brasil.json"
          }
        });
      });

    }, error => alert("Erro ao carregar funcionarios! Verifique o servidor."));
  }

  ngOnInit(): void {
  }

  openDialogEdit(id: number, funcionario: Funcionario) {
    const dialogRef = this.dialog.open(EditarComponent, {
      width: '500px',
      data: { id: id, funcionario: funcionario }
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result == undefined) return;
      this.editarFuncionario(id, result);
    })
  }

  openDialogDelete(id: number, nome: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: { id: id, nome: nome }
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result == undefined) return;
      this.deletarFuncionario(result);
    })
  }

  editarFuncionario(id: number, funcionario: Funcionario) {
    this.httpService.editarFuncionario(id, funcionario).subscribe(data => {
      if (data > 0) {
        window.location.reload();
        alert("Funcionario editado com sucesso!");
      }
    },
      error => alert("Erro ao editar funcionario! Verifique o servidor."))
  }

  deletarFuncionario(id: number) {
    this.httpService.deletarFuncionario(id).subscribe(data => {
      if (data > 0) {
        window.location.reload();
        alert("Funcionario deletado com sucesso!");
      }

    },
      error => alert("Erro ao deletar funcionario! Verifique o servidor."))
  }
}
