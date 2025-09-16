import * as React from 'react';
import styles from './IndustryEvents.module.scss';
import { IIndustryEventsProps } from './IIndustryEventsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp/presets/all';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface IIndustryEventsState {
}


require('../assets/css/style.css');

export default class IndustryEvents extends React.Component<IIndustryEventsProps, IIndustryEventsState> {

  constructor(props: IIndustryEventsProps, state: IIndustryEventsState) {
    super(props);

    this.state = {

    };

  }

  public render(): React.ReactElement<IIndustryEventsProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section id="industryEvents">

          <div className="industry-container">
            <div className="industry-header">Industry Events</div>
            <span className='industry-Span'></span>

            <div className='industry-scrollbar'>

            <div className="industry-card">
              <div className="industry-date">
                <div className="industry-day">15</div>
                <div className="industry-month">SEPTEMBER</div>
              </div>
              <div className="industry-details">
                <div className="industry-title">Event title</div>
                <div className="industry-description">Quis autem similique dolorem ut sit odit perspi ciatis. Et perferendis est</div>
                <div className="partner-name">Partner Name</div>
              </div>
            </div>

            <div className="industry-card">
              <div className="industry-date">
                <div className="industry-day">15</div>
                <div className="industry-month">SEPTEMBER</div>
              </div>
              <div className="industry-details">
                <div className="industry-title">Event title</div>
                <div className="industry-description">Quis autem similique dolorem ut sit odit perspi ciatis. Et perferendis est</div>
                <div className="partner-name">Partner Name</div>
              </div>
            </div>

            <div className="industry-card">
              <div className="industry-date">
                <div className="industry-day">15</div>
                <div className="industry-month">SEPTEMBER</div>
              </div>
              <div className="industry-details">
                <div className="industry-title">Event title</div>
                <div className="industry-description">Quis autem similique dolorem ut sit odit perspi ciatis. Et perferendis est</div>
                <div className="partner-name">Partner Name</div>
              </div>
            </div>


            </div>

          </div>
       
      </section>
    );
  }
}
