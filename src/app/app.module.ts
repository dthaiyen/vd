import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HelloComponent1 } from './hello1/hello1.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { SumComponent } from './sum/sum.component';
import { FormSumComponent } from './form-sum/form-sum.component';
import { InputABComponent } from './input-ab/input-ab.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HelloComponent1,
    NewCmpComponent,
    MenuComponent,
    SumComponent,
    FormSumComponent,
    InputABComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
