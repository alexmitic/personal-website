import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuicksortComponent } from './quicksort.component';

describe('QuicksortComponent', () => {
  let component: QuicksortComponent;
  let fixture: ComponentFixture<QuicksortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuicksortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuicksortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
