import * as React from 'react';
import styles from './QuickLinks.module.scss';
import { IQuickLinksProps } from './IQuickLinksProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp/presets/all';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface IQuickLinksState {
}

require('../assets/css/style.css');

export default class QuickLinks extends React.Component<IQuickLinksProps, IQuickLinksState> {

  constructor(props: IQuickLinksProps, state: IQuickLinksState) {
    super(props);

    this.state = {

    };

  }

  public render(): React.ReactElement<IQuickLinksProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section id="quickLinks">

        <div className="quick-links-container">
          <div className="quick-links-header">Quick Links</div>
          <span className='Quicks-Span'></span>
          <div className="scrollable">

            <a href="#" className="link-item">
              <div className="link-icon">
                <img src={require("../assets/Images/apps-add.png")} alt="icon" />
              </div>
              <div className="link-text">HR Documentation</div>
            </a>

            <a href="#" className="link-item">
              <div className="link-icon">
                <img src={require("../assets/Images/apps-add.png")} alt="icon" />
              </div>
              <div className="link-text">Desk Booking Links</div>
            </a>

            <a href="#" className="link-item">
              <div className="link-icon">
                <img src={require("../assets/Images/apps-add.png")} alt="icon" />
              </div>
              <div className="link-text">Marketing Documents</div>
            </a>
            
            <a href="#" className="link-item">
              <div className="link-icon">
                <img src={require("../assets/Images/apps-add.png")} alt="icon" />
              </div>
              <div className="link-text">Expenses Link</div>
            </a>

            <a href="#" className="link-item">
              <div className="link-icon">
                <img src={require("../assets/Images/apps-add.png")} alt="icon" />
              </div>
              <div className="link-text">Products Link</div>
            </a>

            <a href="#" className="link-item">
              <div className="link-icon">
                <img src={require("../assets/Images/apps-add.png")} alt="icon" />
              </div>
              <div className="link-text">News Link</div>
            </a>

          </div>
        </div>
        
      </section>
    );
  }
}
