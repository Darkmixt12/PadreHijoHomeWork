import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-padre2',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent2 {

  @Input() 
  edadAbuelo!: number
  
  edadPadre: number = 30

  edadHijo!: number


  recibirEdadHijo(event: number): void {
    this.edadHijo = event
  }

  @Output()
  enviarEdadPadre = new EventEmitter();

  ngOnInit(): void {
    this.enviarEdadPadre.emit(this.edadPadre)
  }
}
