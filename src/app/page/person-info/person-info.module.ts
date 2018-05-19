import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PersonInfoComponent } from './person-info.component';
import { PersonBaseComponent } from './person-base/person-base.component';
import { PersonInfoRoutingModule } from './person-info-routing.module';

@NgModule({
  declarations: [
    PersonInfoComponent,
    PersonBaseComponent
  ],
  imports: [
    PersonInfoRoutingModule
  ],
})
export class PersonInfoModule { }
