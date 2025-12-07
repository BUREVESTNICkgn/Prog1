import { Routes } from '@angular/router';
import { CosmonautListComponent } from './cosmonaut-list/cosmonaut-list.component';
import { CosmonautDetailComponent } from './cosmonaut-detail/cosmonaut-detail.component';

export const routes: Routes = [
  { path: '', component: CosmonautListComponent },
  { path: 'detail/:id', component: CosmonautDetailComponent },
  { path: '**', redirectTo: '' }
];
