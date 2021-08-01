import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteHorarioPage } from './cliente-horario.page';

describe('ClienteHorarioPage', () => {
  let component: ClienteHorarioPage;
  let fixture: ComponentFixture<ClienteHorarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteHorarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteHorarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
