import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteAgendaPage } from './cliente-agenda.page';

describe('ClienteAgendaPage', () => {
  let component: ClienteAgendaPage;
  let fixture: ComponentFixture<ClienteAgendaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteAgendaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteAgendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
