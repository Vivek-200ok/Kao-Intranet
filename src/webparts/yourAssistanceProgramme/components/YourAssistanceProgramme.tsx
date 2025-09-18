import * as React from 'react';
import styles from './YourAssistanceProgramme.module.scss';
import { IYourAssistanceProgrammeProps } from './IYourAssistanceProgrammeProps';
import { escape } from '@microsoft/sp-lodash-subset';


export interface IYourAssistanceProgrammeState {
}

require('../assets/css/style.css');

export default class YourAssistanceProgramme extends React.Component<IYourAssistanceProgrammeProps, IYourAssistanceProgrammeState> {

  constructor(props: IYourAssistanceProgrammeProps, state: IYourAssistanceProgrammeState) {
      super(props);
  
      this.state = {
      };
  
  }

  public render(): React.ReactElement<IYourAssistanceProgrammeProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section id="yourAssistanceProgramme">

        <div className="Assistance-card">
          <div className="Assistance-header">
           
            <div className="curve">
              {/* <svg viewBox="0 0 600 100" preserveAspectRatio="none">
                <path d="M0,0 C150,100 450,100 600,0 L600,100 L0,100 Z" fill="#24b3c8" />
              </svg> */}
            </div>
          </div>
          <div className="Assistance-body">
            <h2>YOUR ASSISTANCE PROGRAMME</h2>
            <p>A 24-hour helpline from Health Assured to support you through any of life's issues or problems.</p>
          </div>
        </div>
       
      </section>
    );
  }
}
