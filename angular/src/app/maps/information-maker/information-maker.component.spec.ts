import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationMakerComponent } from './information-maker.component';

describe('InformationMakerComponent', () => {
  let component: InformationMakerComponent;
  let fixture: ComponentFixture<InformationMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
