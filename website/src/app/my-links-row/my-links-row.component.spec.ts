import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLinksRowComponent } from './my-links-row.component';

describe('MyLinksRowComponent', () => {
  let component: MyLinksRowComponent;
  let fixture: ComponentFixture<MyLinksRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLinksRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLinksRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
