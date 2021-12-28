import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarHorariosPage } from './gerar-horarios.page';

describe('GerarHorariosPage', () => {
  let component: GerarHorariosPage;
  let fixture: ComponentFixture<GerarHorariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerarHorariosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerarHorariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
