import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsRowComponent } from './facts-row.component';

describe('FactsRowComponent', () => {
  let component: FactsRowComponent;
  let fixture: ComponentFixture<FactsRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactsRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
