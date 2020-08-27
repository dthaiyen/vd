import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-sum',
  templateUrl: './form-sum.component.html',
  styleUrls: ['./form-sum.component.css'],
})
export class FormSumComponent implements OnInit {
  @Output() tinhtongChanged: EventEmitter<any> = new EventEmitter();
  a: number;
  b: number;
  total: any;
  // buttonDisabled = this.a && this.b ? false : true;
  tinh() {
    this.total = Number(this.a) + Number(this.b);
    this.tinhtongChanged.emit(this.total);
  }
  constructor() {}

  ngOnInit(): void {}
}
