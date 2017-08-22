import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackvoteComponent } from './stackvote.component';

describe('StackvoteComponent', () => {
  let component: StackvoteComponent;
  let fixture: ComponentFixture<StackvoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackvoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackvoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
