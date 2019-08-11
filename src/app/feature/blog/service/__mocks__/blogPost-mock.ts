import { BlogPost } from '../../../../shared-module/components/blog-post/blogpost';

export const postsMocks: BlogPost[] = [
  {
    title: 'Test title',
    subtitle: 'Test subtitle',
    date: new Date('03/23/2019'),
    iFrameUrl: 'https://test.test',
    bottomButtons: [
      { link: 'https://www.test.com', text: 'Voir sur Test' }
    ]
  },
  {
    title: 'Test title',
    subtitle: 'Test subtitle',
    date: new Date('03/23/2019'),
    text: 'Text test',
    bottomButtons: [
      { link: 'https://www.test.com', text: 'Voir sur Test' }
    ]
  }
];
