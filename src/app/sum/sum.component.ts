import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css'],
})
export class SumComponent implements OnInit {
  @Input() tong: any;
  constructor() {}
  ngOnInit(): void {}
}
