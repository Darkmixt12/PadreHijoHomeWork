import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent2 {

  
  edadHijo: number = 10

  @Input()
  edadPadre!: number

  @Output()
  enviarEdad = new EventEmitter();

  ngOnInit(){
    this.enviarEdad.emit(this.edadHijo)
  }

}
