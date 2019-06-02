import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharePictureComponent } from './share-picture.component';

describe('SharePictureComponent', () => {
  let component: SharePictureComponent;
  let fixture: ComponentFixture<SharePictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharePictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
