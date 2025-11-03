import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';           // ← для [(ngModel)]
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';         // ← для *ngFor, *ngIf

import { AppComponent } from './app.component';
import { CosmonautListComponent } from './cosmonaut-list/cosmonaut-list.component';
import { CosmonautDetailComponent } from './cosmonaut-detail/cosmonaut-detail.component';
import { CosmonautService } from './cosmonaut.service';

const routes: Routes = [
  { path: '', component: CosmonautListComponent },
  { path: 'detail/:id', component: CosmonautDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    CosmonautListComponent,
    CosmonautDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,        // ← обязательно!
    CommonModule,       // ← обязательно!
    RouterModule.forRoot(routes)
  ],
  providers: [CosmonautService],
  bootstrap: [AppComponent]
})
export class AppModule { }