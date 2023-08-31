import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit{

  sonAge: number = 15

  @Input()
  fatherAge = 0

  @Output()
  edadHijo = new EventEmitter();

  ngOnInit(){
    this.edadHijo.emit(this.sonAge)
}

}
