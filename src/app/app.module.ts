import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // ← ИСПРАВЛЕНИЕ: для [(ngModel)]
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';  // ← ИСПРАВЛЕНИЕ: для *ngFor, *ngIf

import { AppComponent } from './app.component';  // ← Стандартный импорт
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
    CosmonautListComponent,  // ← Автоматически добавится CLI
    CosmonautDetailComponent  // ← Автоматически добавится CLI
  ],
  imports: [
    BrowserModule,
    CommonModule,  // ← ИСПРАВЛЕНИЕ: Обязательно!
    FormsModule,   // ← ИСПРАВЛЕНИЕ: Для форм и поиска
    RouterModule.forRoot(routes)
  ],
  providers: [CosmonautService],
  bootstrap: [AppComponent]
})
export class AppModule { }