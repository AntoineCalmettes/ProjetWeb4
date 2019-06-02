import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsVisualComponent } from './maps-visual.component';

describe('MapsVisualComponent', () => {
  let component: MapsVisualComponent;
  let fixture: ComponentFixture<MapsVisualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsVisualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
