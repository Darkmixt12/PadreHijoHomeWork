import { HijoComponent } from './../hijo/hijo.component';
import { AfterViewInit, Component, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  @Input()
  abueloAge = 0

  @Output()
  fatherAge = 30

  sonAge!: number


  recibirEdadHijo(event:number){
    this.sonAge = event
  }

}
