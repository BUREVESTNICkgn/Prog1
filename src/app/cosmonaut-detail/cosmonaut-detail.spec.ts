import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmonautDetail } from './cosmonaut-detail';

describe('CosmonautDetail', () => {
  let component: CosmonautDetail;
  let fixture: ComponentFixture<CosmonautDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CosmonautDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CosmonautDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
