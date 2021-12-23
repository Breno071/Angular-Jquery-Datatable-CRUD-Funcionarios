import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/Funcionario';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>('http://localhost:5219/api/v1/funcionarios');
  }
}
