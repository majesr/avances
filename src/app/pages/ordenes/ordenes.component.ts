import { Component, OnInit } from '@angular/core';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { Pedidorde } from 'src/app/models/pedidorden';
import { Ordenes } from 'src/app/models/orden';

declare const message: any;

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

  recordList: Ordenes[];

  constructor(private ordenesser: OrdenesService) { }
  ngOnInit(): void {
    this.ordenesser.cargar_orden().subscribe(response => {
      this.recordList = response;
    });

  }

}
