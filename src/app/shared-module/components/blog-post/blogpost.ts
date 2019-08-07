export class BlogPost {
  title: string;
  subtitle: string;
  date: Date;

  // optional
  location?: string;
  text?: string;
  iFrameUrl?: string;

  bottomButtons?: any[] = [];

  constructor(title: string,
              subtitle: string,
              date: Date,
              location?: string,
              text?: string,
              iFrameUrl?: string,
              bottomButtons?: any[]) {
    this.title = title;
    this.subtitle = subtitle;
    this.date = date;
    this.location = location;
    this.text = text;
    this.iFrameUrl = iFrameUrl;
    this.bottomButtons = bottomButtons;
  }
}
