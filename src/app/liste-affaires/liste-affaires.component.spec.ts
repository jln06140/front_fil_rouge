import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAffairesComponent } from './liste-affaires.component';

describe('ListeAffairesComponent', () => {
  let component: ListeAffairesComponent;
  let fixture: ComponentFixture<ListeAffairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAffairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAffairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
