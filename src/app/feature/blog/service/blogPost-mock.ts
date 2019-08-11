import { BlogPost } from '../../../shared-module/components/blog-post/blogpost';

export const POSTS: BlogPost[] = [
  {
    title: 'Bêta Android d\'ÉTSMobile',
    subtitle: 'Sortie préliminaire de la nouvelle version',
    date: new Date('03/23/2019'),
    iFrameUrl:
      'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FClubApplETS%2Fposts%2F2111775112205619&width=500',
    bottomButtons: [
      { link: 'https://www.facebook.com/ClubApplETS/posts/1872106766172456', text: 'Voir sur Facebook' },
      { link: 'https://twitter.com/ClubApplETS/status/1044691798420008965', text: 'Voir sur Twitter' }
    ]
  }
];
