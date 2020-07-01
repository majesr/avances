import { Component, OnInit } from '@angular/core';
import { Categoria, CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {
  categorias: Categoria[];

  constructor(private categoriaservice: CategoriasService) { }

  ngOnInit(): void {
    this.categoriaservice.getAll().subscribe(response => {
      this.categorias = response;
    });
  }

}
