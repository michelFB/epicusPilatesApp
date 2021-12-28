import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacotesClientesPage } from './pacotes-clientes.page';

describe('PacotesClientesPage', () => {
  let component: PacotesClientesPage;
  let fixture: ComponentFixture<PacotesClientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacotesClientesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacotesClientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
