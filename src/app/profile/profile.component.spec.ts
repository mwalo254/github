import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { profilecomponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: profilecomponent;
  let fixture: ComponentFixture<profilecomponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ profilecomponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(profilecomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});