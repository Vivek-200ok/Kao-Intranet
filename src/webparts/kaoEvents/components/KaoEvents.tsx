import * as React from 'react';
import styles from './KaoEvents.module.scss';
import { IKaoEventsProps } from './IKaoEventsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp/presets/all';

export interface IKaoEventsState {
}

require('../assets/css/style.css');

export default class KaoEvents extends React.Component<IKaoEventsProps, IKaoEventsState> {

  constructor(props: IKaoEventsProps, state: IKaoEventsState) {
    super(props);

    this.state = {

    };

  }

  public render(): React.ReactElement<IKaoEventsProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section id="kaoEvents">

        <div className="Events-container">
          <div className="Events-header">KAO Events</div>
          <span className='Events-Span'></span>

          <div className='Events-scrollable'>
            <div className="event">
              <div className="Events-box">
                <span className="day">15</span>
                <span className="month">SEPTEMBER</span>
              </div>
              <div className="event-details">
                <h3>Event title</h3>
                <p>Quis autem similique dolorem ut sit odit perspiciatis. Et perferendis est.</p>
              </div>
            </div>

            <div className="event">
              <div className="Events-box">
                <span className="day">28</span>
                <span className="month">SEPTEMBER</span>
              </div>
              <div className="event-details">
                <h3>Event title</h3>
                <p>Quis autem similique dolorem ut sit odit perspiciatis. Et perferendis est.</p>
              </div>
            </div>

            <div className="event">
              <div className="Events-box">
                <span className="day">10</span>
                <span className="month">AUGUST</span>
              </div>
              <div className="event-details">
                <h3>Event title</h3>
                <p>Quis autem similique dolorem ut sit odit perspiciatis. Et perferendis est.</p>
              </div>
            </div>

          </div>

        </div>
  
      </section>
    );
  }
}
