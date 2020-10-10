import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaiquiriComponent } from './daiquiri.component';

describe('DaiquiriComponent', () => {
  let component: DaiquiriComponent;
  let fixture: ComponentFixture<DaiquiriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaiquiriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaiquiriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
