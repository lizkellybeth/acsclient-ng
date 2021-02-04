import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcsStatusComponent } from './acs-status.component';

describe('AcsStatusComponent', () => {
  let component: AcsStatusComponent;
  let fixture: ComponentFixture<AcsStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcsStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
