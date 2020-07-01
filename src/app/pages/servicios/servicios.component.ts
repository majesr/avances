import { Component, OnInit } from '@angular/core';
import { Servicio, ServiciosService } from '../../services/servicios.service';
import { Params, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  servicios: Servicio[];
  public id: string;

  constructor(private serviciosservice: ServiciosService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.serviciosservice.getAll().subscribe(response => {
      this.servicios = response;
    });

    this.route.params.subscribe((params: Params) => {
      this.id = params.id;

      console.log(this.id);

    });
  }

  /**
   * addProducto
   */
  addProducto(servicios) {
    this.serviciosservice.addCarrito(servicios);
  }

}
