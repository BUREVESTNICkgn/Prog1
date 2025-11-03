import { Component } from '@angular/core';
import { Cosmonaut, CosmonautService } from '../cosmonaut.service';  // ← Импорт интерфейса

@Component({
  selector: 'app-cosmonaut-list',
  templateUrl: './cosmonaut-list.component.html',
  styleUrls: ['./cosmonaut-list.component.css']
})
export class CosmonautListComponent {
  cosmonauts: Cosmonaut[] = [];
  searchTerm: string = '';

  constructor(private cosmonautService: CosmonautService) {
    this.cosmonauts = this.cosmonautService.getCosmonauts();
  }

  get filteredCosmonauts(): Cosmonaut[] {
    if (!this.searchTerm) return this.cosmonauts;
    return this.cosmonauts.filter(c =>
      c.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}