import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToButtonComponent } from '../go-to-button.component';

describe('GoToButtonComponent', () => {
  let component: GoToButtonComponent;
  let fixture: ComponentFixture<GoToButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoToButtonComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GoToButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(fixture).toBeTruthy();
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  describe('Auto icon and icon alt', () => {
    // TODO
  });
});
