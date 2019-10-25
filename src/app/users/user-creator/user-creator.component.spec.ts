import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreatorComponent } from './user-creator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

describe('UserCreatorComponent', () => {
  let component: UserCreatorComponent;
  let fixture: ComponentFixture<UserCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserCreatorComponent],
      imports: [ReactiveFormsModule, StoreModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a form', () => {
    const form = document.querySelector('form');
    expect(form).toBeTruthy();
  });
});
