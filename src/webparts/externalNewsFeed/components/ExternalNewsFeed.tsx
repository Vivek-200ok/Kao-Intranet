import * as React from 'react';
import styles from './ExternalNewsFeed.module.scss';
import { IExternalNewsFeedProps } from './IExternalNewsFeedProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp/presets/all';


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

            <div className="external-item">
              <div className="external-box">
                <span>Sep</span><span>4</span>
              </div>
              <div className="external-content">
                <div className="external-title">News title</div>
                <div className="external-date">Sunday, Sep 4, 12:00 PM</div>
                <div className="external-category">Category</div>
              </div>
            </div>

            <div className="external-item">
              <div className="external-box">
                <span>Sep</span>2
              </div>
              <div className="external-content">
                <div className="external-title">News title</div>
                <div className="external-date">Friday, Sep 2, 12:00 PM</div>
                <div className="external-category">Category</div>
              </div>
            </div>

            <div className="external-item">
              <div className="external-box">
                <span>Sep</span>1
              </div>
              <div className="external-content">
                <div className="external-title">News title</div>
                <div className="external-date">Thursday, Sep 1, 12:00 PM</div>
                <div className="external-category">Category</div>
              </div>
            </div>

            <div className="external-item">
              <div className="external-box">
                <span>Sep</span>3
              </div>
              <div className="external-content">
                <div className="external-title">News title</div>
                <div className="external-date">Thursday, Sep 3 , 01:00 PM</div>
                <div className="external-category">Category</div>
              </div>
            </div>


          </div>

        </div>

      </section>
    );
  }
}
