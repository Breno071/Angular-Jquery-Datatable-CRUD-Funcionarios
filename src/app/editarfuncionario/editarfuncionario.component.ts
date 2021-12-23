import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Funcionario } from '../models/Funcionario';


interface FuncionarioEdit {
  id: number;
  funcionario: Funcionario;
}

@Component({
  selector: 'app-editar',
  templateUrl: './editarfuncionario.component.html',
  styleUrls: ['./editarfuncionario.component.css']
})
export class EditarComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FuncionarioEdit
  ) {
    this.form = new FormGroup({
      nome: new FormControl(this.data.funcionario.nome, [Validators.required]),
      sobrenome: new FormControl(this.data.funcionario.sobrenome, [Validators.required]),
      email: new FormControl(this.data.funcionario.email, [Validators.required, Validators.email]),
      genero: new FormControl(this.data.funcionario.genero, [Validators.required]),
      cidade: new FormControl(this.data.funcionario.cidade, [Validators.required]),
      pais: new FormControl(this.data.funcionario.pais, [Validators.required]),
      empresa: new FormControl(this.data.funcionario.empresa, [Validators.required]),
      salario: new FormControl(this.data.funcionario.salario, [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }


}
