import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigureFn, configureTests } from '../../../../../config.helpers';


import { ChangeDetectionStrategy } from '@angular/core';
import { CardComponent } from '../card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    const configure: ConfigureFn = testBed => {
      testBed.configureTestingModule({
        declarations: [ CardComponent ]
      })
        .overrideComponent(CardComponent, {
          set: { changeDetection: ChangeDetectionStrategy.Default },
        });
    };

    configureTests(configure).then(testBed => {
      fixture = testBed.createComponent(CardComponent);
      component = fixture.componentInstance;

      component.title = 'Test title';
      component.text = 'Test text';
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(fixture).toBeTruthy();
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
