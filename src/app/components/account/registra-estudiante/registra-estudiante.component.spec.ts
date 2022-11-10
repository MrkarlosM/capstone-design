import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraEstudianteComponent } from './registra-estudiante.component';

describe('RegistraEstudianteComponent', () => {
  let component: RegistraEstudianteComponent;
  let fixture: ComponentFixture<RegistraEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistraEstudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistraEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
