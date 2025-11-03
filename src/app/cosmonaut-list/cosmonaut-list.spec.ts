import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmonautList } from './cosmonaut-list';

describe('CosmonautList', () => {
  let component: CosmonautList;
  let fixture: ComponentFixture<CosmonautList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CosmonautList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CosmonautList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
