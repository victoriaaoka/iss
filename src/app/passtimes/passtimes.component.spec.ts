import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasstimesComponent } from './passtimes.component';

describe('PasstimesComponent', () => {
  let component: PasstimesComponent;
  let fixture: ComponentFixture<PasstimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasstimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasstimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
