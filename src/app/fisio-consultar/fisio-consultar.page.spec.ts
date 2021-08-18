import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FisioConsultarPage } from './fisio-consultar.page';

describe('FisioConsultarPage', () => {
  let component: FisioConsultarPage;
  let fixture: ComponentFixture<FisioConsultarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FisioConsultarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FisioConsultarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
