import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterPartComponent } from './center-part.component';

describe('CenterPartComponent', () => {
  let component: CenterPartComponent;
  let fixture: ComponentFixture<CenterPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
