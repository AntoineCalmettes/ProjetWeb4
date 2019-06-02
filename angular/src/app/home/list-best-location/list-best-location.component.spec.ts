import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBestLocationComponent } from './list-best-location.component';

describe('ListBestLocationComponent', () => {
  let component: ListBestLocationComponent;
  let fixture: ComponentFixture<ListBestLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBestLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBestLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
