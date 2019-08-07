import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeDetectionStrategy } from '@angular/core';
import { ConfigureFn, configureTests } from '../../../../../config.helpers';

import { BlogPostComponent } from '../blog-post.component';
import { BlogPost } from '../blogpost';
import { GoToButtonComponent } from '../../go-to-button/go-to-button.component';

describe('BlogPostComponent', () => {
  let component: BlogPostComponent;
  let fixture: ComponentFixture<BlogPostComponent>;

  beforeEach(async(() => {
    const configure: ConfigureFn = testBed => {
      testBed.configureTestingModule({
        declarations: [BlogPostComponent, GoToButtonComponent],

      })
        .overrideComponent(BlogPostComponent, {
          set: { changeDetection: ChangeDetectionStrategy.Default }
        });
    };

    configureTests(configure).then(testBed => {
      fixture = testBed.createComponent(BlogPostComponent);
      component = fixture.componentInstance;

      component.post = new BlogPost('testTitle',
        'testSubtitle',
        new Date('03/23/2019'),
        null,
        'Test'
      );
      fixture.detectChanges();
    });
  }));

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('should contains a location', () => {
    component.post = new BlogPost('testTitle',
      'testSubtitle',
      new Date('03/23/2019'),
      'Test location',
      'Test'
    );
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

  it('should contains a iFrame', () => {
    component.post = new BlogPost('testTitle',
      'testSubtitle',
      new Date('03/23/2019'),
      null,
      null,
      'https://github.com');
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

  it('should contains a link button', () => {
    component.post = new BlogPost('testTitle',
      'testSubtitle',
      new Date('03/23/2019'),
      null,
      null,
      null,
      [{
        links: 'https://test.test',
        text: 'Voir test'
      }]);
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });
});
