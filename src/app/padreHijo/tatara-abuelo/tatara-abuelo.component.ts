import { Component, ViewChild } from '@angular/core';
import { AbueloComponent } from '../abuelo/abuelo.component';

@Component({
  selector: 'app-tatara-abuelo',
  templateUrl: './tatara-abuelo.component.html',
  styleUrls: ['./tatara-abuelo.component.css']
})
export class TataraAbueloComponent {

  bisAbueloAge = 90;
  abueloAge!: number;

  @ViewChild(AbueloComponent) abuelo:any;

  ngAfterViewInit(): void {
    this.abueloAge = this.abuelo.abueloAge
  }
}
