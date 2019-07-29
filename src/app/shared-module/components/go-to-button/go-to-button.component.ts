import { Component, Input, OnInit } from '@angular/core';
import * as constants from './constants';

@Component({
  selector: 'app-go-to-button',
  templateUrl: './go-to-button.component.html',
  styleUrls: ['./go-to-button.component.css']
})
export class GoToButtonComponent implements OnInit {

  @Input() link: string;

  @Input() text: string;

  /**
   * The icon is automatically choose if the link is from facebook, twitter or github
   */
  @Input() icon?: string;
  @Input() iconAlt?: string;

  ngOnInit() {
    if (!this.icon && this.link) {
      if (this.link.includes('facebook')) {
        this.icon = constants.FACEBOOK_ICON;
        this.iconAlt = constants.FACEBOOK_LABEL;
      } else if (this.link.includes('twitter')) {
        this.icon = constants.TWITTER_ICON;
        this.iconAlt = constants.TWITTER_LABEL;
      } else if (this.link.includes('github')) {
        this.iconAlt = constants.GITHUB_LABEL;
        if (this.text !== '') {
          this.icon = constants.GITHUB_OCTOCAT_ICON;
        } else {
          this.icon = constants.GITHUB_ICON;
        }
      }
    }
  }

}
