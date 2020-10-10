import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MartiniComponent } from './martini.component';

describe('MartiniComponent', () => {
  let component: MartiniComponent;
  let fixture: ComponentFixture<MartiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MartiniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MartiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
