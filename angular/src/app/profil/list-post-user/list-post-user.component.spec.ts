import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostUserComponent } from './list-post-user.component';

describe('ListPostUserComponent', () => {
  let component: ListPostUserComponent;
  let fixture: ComponentFixture<ListPostUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPostUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
