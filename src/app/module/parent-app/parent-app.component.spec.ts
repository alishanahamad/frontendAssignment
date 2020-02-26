import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentAppComponent } from './parent-app.component';

describe('ParentAppComponent', () => {
  let component: ParentAppComponent;
  let fixture: ComponentFixture<ParentAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
