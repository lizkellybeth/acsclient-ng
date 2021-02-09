import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmcdbComponent } from './tmcdb.component';

describe('TmcdbComponent', () => {
  let component: TmcdbComponent;
  let fixture: ComponentFixture<TmcdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmcdbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmcdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
