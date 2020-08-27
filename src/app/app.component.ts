import { Component, ViewChild } from '@angular/core';
import { InputABComponent } from './input-ab/input-ab.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  total: any;
  a: any;
  b: any;
  @ViewChild(InputABComponent, { static: false }) nhaplieu: InputABComponent;
  tinh() {
    this.a = this.nhaplieu.a;
    this.b = this.nhaplieu.b;
    this.total = Number(this.a) + Number(this.b);
  }
  abChanged(ab) {
    this.a = ab.a ? ab.a : null;
    this.b = ab.b ? ab.b : null;
  }
}
