import * as React from 'react';
import styles from './ExternalNewsFeed.module.scss';
import { IExternalNewsFeedProps } from './IExternalNewsFeedProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp/presets/all';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface IExternalNewsFeedState {
}

require('../assets/css/style.css');

export default class ExternalNewsFeed extends React.Component<IExternalNewsFeedProps, IExternalNewsFeedState> {

  constructor(props: IExternalNewsFeedProps, state: IExternalNewsFeedState) {
    super(props);

    this.state = {

    };

  }

  public render(): React.ReactElement<IExternalNewsFeedProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section id="externalNewsFeed">
        
        <div className="external-NewsFeed-container"> 
          <div className="external-NewsFeed-header">External News & Press Releases</div>
          <span className='external-Span'></span>

            <div className='external-scrollable'>

            <div className="news-item">
              <div className="date-box">
                <span>Sep</span>4
              </div>
              <div className="news-content">
                <div className="news-title">News title</div>
                <div className="news-date">Sunday, Sep 4, 12:00 PM</div>
                <div className="category">Category</div>
              </div>
            </div>

            <div className="news-item">
              <div className="date-box">
                <span>Sep</span>2
              </div>
              <div className="news-content">
                <div className="news-title">News title</div>
                <div className="news-date">Friday, Sep 2, 12:00 PM</div>
                <div className="category">Category</div>
              </div>
            </div>

            <div className="news-item">
              <div className="date-box">
                <span>Sep</span>1
              </div>
              <div className="news-content">
                <div className="news-title">News title</div>
                <div className="news-date">Thursday, Sep 1, 12:00 PM</div>
                <div className="category">Category</div>
              </div>
            </div>


            </div>

        </div>

      </section>
    );
  }
}
