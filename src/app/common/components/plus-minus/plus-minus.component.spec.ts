/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlusMinusComponent } from './plus-minus.component';

describe('PlusMinusComponent', () => {
  let component: PlusMinusComponent;
  let fixture: ComponentFixture<PlusMinusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlusMinusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusMinusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
