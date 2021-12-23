import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditarComponent } from '../editar/editar.component';
import { Data, Funcionario } from '../models/Funcionario';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  funcionarios: Funcionario[] = [];
  dtOptions: DataTables.Settings = {};
  constructor(private httpService: HttpService, public dialog: MatDialog) {
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

    }, error => console.log(error));
  }

  ngOnInit(): void {
  }

  editarFuncionario(id: number, funcionario: Funcionario) {
    const dialogRef = this.dialog.open(EditarComponent, {
      width: '500px',
      data: { id: id, funcionario: funcionario }
    })
    console.log(id, funcionario);
  }

  deletarFuncionario(id: number, nome: string) {
    console.log(id, nome);
  }
}
