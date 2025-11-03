import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  // ← ИСПРАВЛЕНИЕ: Импорт Router
import { Cosmonaut, CosmonautService } from '../cosmonaut.service';

@Component({
  selector: 'app-cosmonaut-detail',
  templateUrl: './cosmonaut-detail.component.html',
  styleUrls: ['./cosmonaut-detail.component.css']
})
export class CosmonautDetailComponent implements OnInit {
  cosmonaut?: Cosmonaut;

  constructor(
    private route: ActivatedRoute,
    private router: Router,  // ← Для goBack()
    private cosmonautService: CosmonautService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cosmonaut = this.cosmonautService.getCosmonaut(id);
  }

  goBack(): void {
    this.router.navigate(['']);  // ← Навигация назад
  }
}