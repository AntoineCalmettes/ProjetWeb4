import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLastPoissonComponent } from './list-last-poisson.component';

describe('ListLastPoissonComponent', () => {
  let component: ListLastPoissonComponent;
  let fixture: ComponentFixture<ListLastPoissonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLastPoissonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLastPoissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
