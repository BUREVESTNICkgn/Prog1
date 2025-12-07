import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Cosmonaut, CosmonautService } from '../cosmonaut.service';

@Component({
  selector: 'app-cosmonaut-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cosmonaut-detail.component.html',
  styleUrls: ['./cosmonaut-detail.component.css']
})
export class CosmonautDetailComponent implements OnInit {
  cosmonaut?: Cosmonaut;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cosmonautService: CosmonautService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cosmonaut = this.cosmonautService.getCosmonaut(id);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
