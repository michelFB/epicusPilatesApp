import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FisioCadastroPage } from './fisio-cadastro.page';

describe('FisioCadastroPage', () => {
  let component: FisioCadastroPage;
  let fixture: ComponentFixture<FisioCadastroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FisioCadastroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FisioCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
