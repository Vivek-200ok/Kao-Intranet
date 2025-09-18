import * as React from 'react';
import styles from './FindUs.module.scss';
import { IFindUsProps } from './IFindUsProps';
import { escape } from '@microsoft/sp-lodash-subset';

export interface IFindUsState {
}

require('../assets/css/style.css');

export default class FindUs extends React.Component<IFindUsProps, IFindUsState> {

  constructor(props: IFindUsProps, state: IFindUsState) {
      super(props);
  
      this.state = {
      };
  
  }

  public render(): React.ReactElement<IFindUsProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section id="findUs">

        <div className="findUs-card">
          <div className='FindUs-Header'>How to find us</div>
          <span className='findUs-Span'></span>
          <div className="findUs-content">
            <img src={require("../assets/Images/KAO_DATA_Sharepoint-annotated.jpg")} alt="How to find us map" />
              <p>
                Quis autem similique dolorem ut sit odit perspi ciatis.
                Et perferendis est quia magni et sapie nte neces sitatibus.
                Id est eius expedita quasi voluptas similique ut sit odit perspiciatis.
                Et perferendis est quia.
              </p>
          </div>
          <a href="#" className="btn">Download</a>
        </div>
        
      </section>
    );
  }
}
