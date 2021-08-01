import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesConsultarPage } from './clientes-consultar.page';

describe('ClientesConsultarPage', () => {
  let component: ClientesConsultarPage;
  let fixture: ComponentFixture<ClientesConsultarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesConsultarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesConsultarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
