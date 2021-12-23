import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-cadastrarfuncionario',
  templateUrl: './cadastrarfuncionario.component.html',
  styleUrls: ['./cadastrarfuncionario.component.css']
})
export class CadastrarfuncionarioComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(private httpService: HttpService) {
    this.formGroup = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      sobrenome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      genero: new FormControl('', [Validators.required]),
      cidade: new FormControl('', [Validators.required]),
      pais: new FormControl('', [Validators.required]),
      empresa: new FormControl('', [Validators.required]),
      salario: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  cadastrarFuncionario() {
    if (this.formGroup.invalid) return;
    this.httpService.criarUsuario(this.formGroup.value).subscribe(data => {
      if (data > 0) {
        alert('Cadastro realizado com sucesso!');
        this.formGroup.reset();
      }
    }, error => alert('Erro ao cadastrar funcionário! Verifique os dados e tente novamente.'));
  }

}
