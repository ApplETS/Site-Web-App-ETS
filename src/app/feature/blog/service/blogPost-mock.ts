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
      { link: 'https://twitter.com/ClubApplETS/status/1044691798420008965', text: 'Voir sur Twitter' },
      {
        link: 'https://play.google.com/store/apps/details?id=ca.etsmtl.applets.etsmobile.beta&fbclid=IwAR326vaMSWMG1oYmvBkPJyFgPmhtEEz6iVzHZNYHH8xpWZKMBRJjSKCgS7k',
        text: 'Télécharger l\'application',
      }
    ]
  },
  {
    title: '.droidcon NYC',
    subtitle: 'Une conférence enrichissante pour l\'équipe Android',
    date: new Date('08/28/2018'),
    location: 'New-York City',
    iFrameUrl:
      'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FClubApplETS%2Fposts%2F1872106766172456&width=500',
    bottomButtons: [
      { link: 'https://www.facebook.com/ClubApplETS/posts/1872106766172456', text: 'Voir sur Facebook' }
    ]
  },
  {
    title: 'StarterHacks 2018',
    subtitle: '24 heures de conception et une nouvelle application pour l\'équipe App|ETS',
    date: new Date('03/03/2018'),
    location: 'Université de Waterloo, Ontario, Canada',
    text:
      'Durant la semaine du 3 mars 2018, des membres du club App|ETS se sont déplacés à\n' +
      'l\'Université de Waterloo en Ontario afin de participer au hackathon "StarterHacks". Durant cette\n' +
      'compétition de 24 heures, ils ont eu la chance de développer une application qui met en contact les\n' +
      'touristes avec des guides locaux, tout en faisant l\'apprentissage de l\'outil multiplateforme Flutter.',
    bottomButtons: [
      { link: 'https://guidefinder.github.io', text: 'Voir le projet' }
    ]
  },
];



