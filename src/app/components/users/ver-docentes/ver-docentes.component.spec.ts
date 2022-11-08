import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDocentesComponent } from './ver-docentes.component';

describe('VerDocentesComponent', () => {
  let component: VerDocentesComponent;
  let fixture: ComponentFixture<VerDocentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerDocentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerDocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
