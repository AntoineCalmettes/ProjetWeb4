import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionProfilComponent } from './description-profil.component';

describe('DescriptionProfilComponent', () => {
  let component: DescriptionProfilComponent;
  let fixture: ComponentFixture<DescriptionProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
