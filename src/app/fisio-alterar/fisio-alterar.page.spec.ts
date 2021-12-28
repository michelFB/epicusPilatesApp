import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FisioAlterarPage } from './fisio-alterar.page';

describe('FisioAlterarPage', () => {
  let component: FisioAlterarPage;
  let fixture: ComponentFixture<FisioAlterarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FisioAlterarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FisioAlterarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
