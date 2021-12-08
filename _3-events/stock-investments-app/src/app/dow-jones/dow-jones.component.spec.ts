import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowJonesComponent } from './dow-jones.component';

describe('DowJonesComponent', () => {
  let component: DowJonesComponent;
  let fixture: ComponentFixture<DowJonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DowJonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DowJonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
