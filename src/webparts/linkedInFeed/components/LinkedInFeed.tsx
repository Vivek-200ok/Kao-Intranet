import * as React from 'react';
import styles from './LinkedInFeed.module.scss';
import { ILinkedInFeedProps } from './ILinkedInFeedProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp/presets/all';

export interface ILinkedInFeedState {
}

require('../assets/css/style.css');

export default class LinkedInFeed extends React.Component<ILinkedInFeedProps, ILinkedInFeedState> {

  constructor(props: ILinkedInFeedProps, state: ILinkedInFeedState) {
      super(props);
  
      this.state = {
      };
  
  }

  public render(): React.ReactElement<ILinkedInFeedProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section id="linkedInFeed">

        <div className="linked-container">
          <div className="linked-header">Linkedin Feed</div>
          <span className='linked-Span'></span>
          <div className='linked-scrollbar'>

            <div className="post-container">

              <div className="post-card">
                <div className="post-header">
                  <img className="logo" src={require("../assets/Images/309492355_2362257503928151_4934919467288210697_n.jpg")} alt="Logo" />
                  Sunday, Sep 4, 12:00 PM
                  <img className="linkedin-icon" src={require("../assets/Images/linkedin.png")} alt="LinkedIn" />
                </div>
                <div className="post-title">Post Title</div>
                <div className="post-text">
                  Quis autem similique dolorem ut sit odit perspi ciatis. Et perferendis est quia magni et sapie
                  nte neces sitatibus. Id est eius expedita quasi voluptas similique ut sit odit perspiciatis.
                </div>
                <div className="post-image">
                  <img src="https://tse1.mm.bing.net/th/id/OIP.jX4_EDkm0Ou5LqwCblpOGQHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Server Room" />
                </div>
              </div>


              <div className="post-card">
                <div className="post-header">
                  <img className="logo" src={require("../assets/Images/309492355_2362257503928151_4934919467288210697_n.jpg")} alt="Logo" />
                  Sunday, Sep 4, 12:00 PM
                  <img className="linkedin-icon" src={require("../assets/Images/linkedin.png")} alt="LinkedIn" />
                </div>
                <div className="post-title">Post Title</div>
                <div className="post-text">
                  Quis autem similique dolorem ut sit odit perspi ciatis. Et perferendis est quia magni et sapie
                  nte neces sitatibus. Id est eius expedita quasi voluptas similique ut sit odit perspiciatis.
                </div>
                <div className="post-image">
                  <img src="https://tse1.mm.bing.net/th/id/OIP.jX4_EDkm0Ou5LqwCblpOGQHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Server Room" />
                </div>
              </div>


              <div className="post-card">
                <div className="post-header">
                  <img className="logo" src={require("../assets/Images/309492355_2362257503928151_4934919467288210697_n.jpg")} alt="Logo" />
                  Sunday, Sep 4, 12:00 PM
                  <img className="linkedin-icon" src={require("../assets/Images/linkedin.png")} alt="LinkedIn" />
                </div>
                <div className="post-title">Post Title</div>
                <div className="post-text">
                  Quis autem similique dolorem ut sit odit perspi ciatis. Et perferendis est quia magni et sapie
                  nte neces sitatibus. Id est eius expedita quasi voluptas similique ut sit odit perspiciatis.
                </div>
                <div className="post-image">
                  <img src="https://tse1.mm.bing.net/th/id/OIP.jX4_EDkm0Ou5LqwCblpOGQHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Server Room" />
                </div>
              </div>

              <div className="post-card">
                <div className="post-header">
                  <img className="logo" src={require("../assets/Images/309492355_2362257503928151_4934919467288210697_n.jpg")} alt="Logo" />
                  Sunday, Sep 4, 12:00 PM
                  <img className="linkedin-icon" src={require("../assets/Images/linkedin.png")} alt="LinkedIn" />
                </div>
                <div className="post-title">Post Title</div>
                <div className="post-text">
                  Quis autem similique dolorem ut sit odit perspi ciatis. Et perferendis est quia magni et sapie
                  nte neces sitatibus. Id est eius expedita quasi voluptas similique ut sit odit perspiciatis.
                </div>
                <div className="post-image">
                  <img src="https://tse1.mm.bing.net/th/id/OIP.jX4_EDkm0Ou5LqwCblpOGQHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Server Room" />
                </div>
              </div>

            </div>

          </div>
        </div>

      </section>
    );
  }
}
