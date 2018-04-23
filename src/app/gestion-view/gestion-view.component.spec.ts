import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionViewComponent } from './gestion-view.component';

describe('GestionViewComponent', () => {
  let component: GestionViewComponent;
  let fixture: ComponentFixture<GestionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
