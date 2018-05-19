import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './page/person/person.component';

const appRoutes: Routes = [
    { path : '' , redirectTo : '/person' , pathMatch : 'full' },
    { path : 'person' , component : PersonComponent},
    { path : 'person-info' , loadChildren : 'app/page/person-info/person-info.module#PersonInfoModule'},
    { path : '**' , redirectTo : '/person' , pathMatch : 'full' }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}