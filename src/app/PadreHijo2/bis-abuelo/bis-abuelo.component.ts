import { Component } from '@angular/core';

@Component({
  selector: 'app-bis-abuelo',
  templateUrl: './bis-abuelo.component.html',
  styleUrls: ['./bis-abuelo.component.css']
})
export class BisAbueloComponent {

  edadBisAbuelo: number = 80

  edadAbuelo!: number

  recibirEdadAbuelo(edad: number): void{
    this.edadAbuelo = edad;
  }
}
