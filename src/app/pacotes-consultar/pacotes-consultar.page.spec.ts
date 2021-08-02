import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacotesConsultarPage } from './pacotes-consultar.page';

describe('PacotesConsultarPage', () => {
  let component: PacotesConsultarPage;
  let fixture: ComponentFixture<PacotesConsultarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacotesConsultarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacotesConsultarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
