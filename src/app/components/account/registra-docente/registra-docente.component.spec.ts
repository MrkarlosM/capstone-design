import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraDocenteComponent } from './registra-docente.component';

describe('RegistraDocenteComponent', () => {
  let component: RegistraDocenteComponent;
  let fixture: ComponentFixture<RegistraDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistraDocenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistraDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
