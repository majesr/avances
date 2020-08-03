import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string;
  idusuario: string;

  constructor(private http: HttpClientModule) { }
}
