import * as React from 'react';
import styles from './WorkwearShop.module.scss';
import { IWorkwearShopProps } from './IWorkwearShopProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp/presets/all';

export interface IWorkwearShopState {
}

require('../assets/css/style.css');

export default class WorkwearShop extends React.Component<IWorkwearShopProps, IWorkwearShopState> {

  constructor(props: IWorkwearShopProps, state: IWorkwearShopState) {
    super(props);

    this.state = {
    };

  }

  public render(): React.ReactElement<IWorkwearShopProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section id="workwearShop">

        <div className="workWear">
          <div className="workWear-content">
            <div className="workWear-overlay">
              <div>
              <h1 className="workWear-title">WORKWEAR SHOP</h1>
              <p className="workWear-description">
                Aut Magni Rem Quia Aliquam Molestiae. Impedit Consequatur Eaque Facere Iure Rerum<br />Nes Ciunt Voluptatem Et. Delectus Eum Vitae Architecto. Dolores Nostrum Enim Et Tenetur
              </p>
              </div>
              <a href="#" className="workWear-button">Learn more</a>
            </div>
          </div>

        </div>

      </section>
    );
  }
}
