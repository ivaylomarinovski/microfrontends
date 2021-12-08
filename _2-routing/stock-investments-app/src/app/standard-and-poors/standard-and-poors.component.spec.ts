import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardAndPoorsComponent } from './standard-and-poors.component';

describe('StandardAndPoorsComponent', () => {
  let component: StandardAndPoorsComponent;
  let fixture: ComponentFixture<StandardAndPoorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardAndPoorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardAndPoorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
