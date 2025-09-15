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

            </div>

          </div>
       
      </section>
    );
  }
}
