import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProyComponent } from './edit-proy.component';

describe('EditProyComponent', () => {
  let component: EditProyComponent;
  let fixture: ComponentFixture<EditProyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
