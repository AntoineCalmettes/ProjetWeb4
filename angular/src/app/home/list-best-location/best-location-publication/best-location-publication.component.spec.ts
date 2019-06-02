import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestLocationPublicationComponent } from './best-location-publication.component';

describe('BestLocationPublicationComponent', () => {
  let component: BestLocationPublicationComponent;
  let fixture: ComponentFixture<BestLocationPublicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestLocationPublicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestLocationPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
