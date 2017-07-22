import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeBoardComponent } from './welcome-board.component';

describe('WelcomeBoardComponent', () => {
  let component: WelcomeBoardComponent;
  let fixture: ComponentFixture<WelcomeBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
