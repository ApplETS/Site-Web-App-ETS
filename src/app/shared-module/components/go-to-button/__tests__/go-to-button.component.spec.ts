import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigureFn, configureTests } from '../../../../../config.helpers';

import { GoToButtonComponent } from '../go-to-button.component';
import { ChangeDetectionStrategy } from '@angular/core';

describe('GoToButtonComponent', () => {
  let component: GoToButtonComponent;
  let fixture: ComponentFixture<GoToButtonComponent>;

  const config = {preserveWhitespaces: false} as any;

  beforeEach(async(() => {
    const configure: ConfigureFn = testBed => {
      testBed.configureTestingModule({
        declarations: [ GoToButtonComponent ]
      })
        .overrideComponent(GoToButtonComponent, {
          set: { changeDetection: ChangeDetectionStrategy.Default },
        });
    };

    configureTests(configure).then(testBed => {
      fixture = testBed.createComponent(GoToButtonComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(fixture).toBeTruthy();
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('Auto icon and icon alt', () => {
    component.link = "https://www.facebook.com";
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
