import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-ab',
  templateUrl: './input-ab.component.html',
  styleUrls: ['./input-ab.component.css'],
})
export class InputABComponent implements OnInit {
  a: number;
  b: number;
  total: any;
  @Output() abChanged: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  ChangeAb() {
    let ab = { a: this.a, b: this.b };
    this.abChanged.emit(ab);
  }
}
