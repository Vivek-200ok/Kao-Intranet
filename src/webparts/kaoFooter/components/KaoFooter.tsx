import * as React from 'react';
import styles from './KaoFooter.module.scss';
import { IKaoFooterProps } from './IKaoFooterProps';
import { escape } from '@microsoft/sp-lodash-subset';

export interface IKaoFooterState {
}

require('../assets/css/style.css');

export default class KaoFooter extends React.Component<IKaoFooterProps, IKaoFooterState> {

  constructor(props: IKaoFooterProps, state: IKaoFooterState) {
      super(props);
  
      this.state = {
      };
  
  }

  public render(): React.ReactElement<IKaoFooterProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section id="kaoFooter">

        <div className="social-bar">
          <a href="https://facebook.com" target="_blank"><img src={require("../assets/Images/facebook.png")} className="fab fa-facebook-f" /></a>
          <a href="https://instagram.com" target="_blank"><img src={require("../assets/Images/Instagram.png")} className="fab fa-instagram" /></a>
          <a href="https://twitter.com" target="_blank"><img src={require("../assets/Images/twitter.png")} className="fab fa-twitter" /></a>
          <a href="https://linkedin.com" target="_blank"><img src={require("../assets/Images/linkedin-logo.png")} className="fab fa-linkedin-in" /></a>
        </div>
        
      </section>
    );
  }
}
