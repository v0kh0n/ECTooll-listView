import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewCheckboxComponent } from './list-view-checkbox.component';

describe('ListViewCheckboxComponent', () => {
  let component: ListViewCheckboxComponent;
  let fixture: ComponentFixture<ListViewCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListViewCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
