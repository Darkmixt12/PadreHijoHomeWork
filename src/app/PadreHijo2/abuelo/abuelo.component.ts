import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-abuelo2',
  templateUrl: './abuelo.component.html',
  styleUrls: ['./abuelo.component.css']
})
export class AbueloComponent2 implements OnInit {

  edadAbuelo: number = 62

  @Input()
  edadBisAbuelo!: number

  edadPadre!: number;

  recibirEdadPadre(edad:number){
    this.edadPadre = edad
  }


  @Output()
  enviarEdadAbuelo = new EventEmitter();
  
  ngOnInit(): void{
    this.enviarEdadAbuelo.emit(this.edadAbuelo);
  }
}
