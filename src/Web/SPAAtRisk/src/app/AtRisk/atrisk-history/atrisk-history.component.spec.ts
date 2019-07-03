import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtriskHistoryComponent } from './atrisk-history.component';

describe('AtriskHistoryComponent', () => {
  let component: AtriskHistoryComponent;
  let fixture: ComponentFixture<AtriskHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtriskHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtriskHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
