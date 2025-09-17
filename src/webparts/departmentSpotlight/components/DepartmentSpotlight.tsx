import * as React from 'react';
import styles from './DepartmentSpotlight.module.scss';
import { IDepartmentSpotlightProps } from './IDepartmentSpotlightProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp/presets/all';


export interface IDepartmentSpotlightState {
}

require('../assets/css/style.css');

export default class DepartmentSpotlight extends React.Component<IDepartmentSpotlightProps, IDepartmentSpotlightState> {

  constructor(props: IDepartmentSpotlightProps, state: IDepartmentSpotlightState) {
    super(props);

    this.state = {

    };

  }

  public render(): React.ReactElement<IDepartmentSpotlightProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section id="departmentSpotlight">

        <div className="department-Spotlight-container"> 
          <div className="department-Spotlight-header">Departmental Spotlight</div>
          <span className='department-Span'></span>

          <div className='department-scrollable'>

            <div className="update-card">
              <div className="update-image">
                <img src="https://tse1.mm.bing.net/th/id/OIP.jX4_EDkm0Ou5LqwCblpOGQHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Server Room" />
              </div>
              <div className="update-content">
                <div className="date">Sunday, Sep 4, 12:00 PM</div>
                <h2>Update Title</h2>
                <p>Quis autem similique dolorem ut sit odit perspi ciatis. Et perferendis est quia magni et
                  sapie nte neces sitatibus. Id est eius expedita quasi voluptas similique ut sit odit
                  perspiciatis. Et perfes wrendis est quia. Quis autem similique dolorem ut sit odit
                  perspi ciatis. Et perferendis est quia magni et sapie nte neces sitatibus. Id est eius
                  expedita quasi voluptas similique ut sit odit perspiciatis. Et perfes wrendis est quia.</p>
              </div>
            </div>

            <div className="update-card">
              <div className="update-image">
                <img src="https://tse1.mm.bing.net/th/id/OIP.jX4_EDkm0Ou5LqwCblpOGQHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Server Room" />
              </div>
              <div className="update-content">
                <div className="date">Sunday, Sep 4, 12:00 PM</div>
                <h2>Update Title</h2>
                <p>Quis autem similique dolorem ut sit odit perspi ciatis. Et perferendis est quia magni et
                  sapie nte neces sitatibus. Id est eius expedita quasi voluptas similique ut sit odit
                  perspiciatis. Et perfes wrendis est quia. Quis autem similique dolorem ut sit odit
                  perspi ciatis. Et perferendis est quia magni et sapie nte neces sitatibus. Id est eius
                  expedita quasi voluptas similique ut sit odit perspiciatis. Et perfes wrendis est quia.</p>
              </div>
            </div>

          </div>

        </div>
        
      </section>
    );
  }
}
