import { Component, OnInit } from '@angular/core';
import { Pedidos, OrdenesService } from 'src/app/services/ordenes.service';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {
  ordenes: Pedidos[];

  constructor(public ordenesser: OrdenesService) { }
  ngOnInit(): void {
  //  this.ordenesser.getAll().subscribe(console.log);
   this.ordenesser.getAll().subscribe(res => {
      this.ordenes = res;
      console.log(this.ordenes);
    });

  }
}
