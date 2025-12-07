import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Cosmonaut, CosmonautService } from '../cosmonaut.service';

@Component({
  selector: 'app-cosmonaut-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cosmonaut-list.component.html',
  styleUrls: ['./cosmonaut-list.component.css']
})
export class CosmonautListComponent {
  cosmonauts: Cosmonaut[] = [];
  searchTerm = '';

  constructor(private cosmonautService: CosmonautService) {
    this.cosmonauts = this.cosmonautService.getCosmonauts();
  }

  get filteredCosmonauts(): Cosmonaut[] {
    if (!this.searchTerm.trim()) {
      return this.cosmonauts;
    }

    const term = this.searchTerm.toLowerCase();
    return this.cosmonauts.filter((c) => c.name.toLowerCase().includes(term));
  }
}
