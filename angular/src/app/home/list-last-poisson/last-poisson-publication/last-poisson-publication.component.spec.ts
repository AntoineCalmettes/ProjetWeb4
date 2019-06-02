import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastPoissonPublicationComponent } from './last-poisson-publication.component';

describe('LastPoissonPublicationComponent', () => {
  let component: LastPoissonPublicationComponent;
  let fixture: ComponentFixture<LastPoissonPublicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastPoissonPublicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastPoissonPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
