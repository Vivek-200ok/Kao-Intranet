import * as React from 'react';
import styles from './LatestTraining.module.scss';
import { ILatestTrainingProps } from './ILatestTrainingProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp/presets/all';

export interface ILatestTrainingState {
}

require('../assets/css/style.css');

export default class LatestTraining extends React.Component<ILatestTrainingProps, ILatestTrainingState> {

  constructor(props: ILatestTrainingProps, state: ILatestTrainingState) {
    super(props);

    this.state = {

    };

  }

  public render(): React.ReactElement<ILatestTrainingProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section id="latestTraining">

        <div className="latestTraining-container">
          <div className="latestTraining-header">Latest Training</div>
          <span className='latestTraining-Span'></span>

          <div className='latestTraining-scrollbar'>

            <div className="training-card">
              <img src="https://cdn.gobankingrates.com/wp-content/uploads/2021/01/savings-iStock-1177056123-e1609885817397.jpg" alt="Training Image" />
              <div className="training-content">
                <div className="training-date">Sunday, Sep 4, 12:00 PM</div>
                <div className="training-title">Training Title</div>
                <div className="training-description">
                  Quis autem similique dolorem ut sit odit perspi ciatis. Et perferendis est quia magni et
                  sapie nte neces sitatibus. Id est eius expedita quasi voluptas similique ut sit odit
                  perspiciatis.
                </div>
              </div>
            </div>

            <div className="training-card">
              <img src="https://cdn.gobankingrates.com/wp-content/uploads/2021/01/savings-iStock-1177056123-e1609885817397.jpg" alt="Training Image" />
              <div className="training-content">
                <div className="training-date">Sunday, Sep 4, 12:00 PM</div>
                <div className="training-title">Training Title</div>
                <div className="training-description">
                  Quis autem similique dolorem ut sit odit perspi ciatis. Et perferendis est quia magni et
                  sapie nte neces sitatibus. Id est eius expedita quasi voluptas similique ut sit odit
                  perspiciatis.
                </div>
              </div>
            </div>

            <div className="training-card">
              <img src="https://cdn.gobankingrates.com/wp-content/uploads/2021/01/savings-iStock-1177056123-e1609885817397.jpg" alt="Training Image" />
              <div className="training-content">
                <div className="training-date">Sunday, Sep 4, 12:00 PM</div>
                <div className="training-title">Training Title</div>
                <div className="training-description">
                  Quis autem similique dolorem ut sit odit perspi ciatis. Et perferendis est quia magni et
                  sapie nte neces sitatibus. Id est eius expedita quasi voluptas similique ut sit odit
                  perspiciatis.
                </div>
              </div>
            </div>

            <div className="training-card">
              <img src="https://cdn.gobankingrates.com/wp-content/uploads/2021/01/savings-iStock-1177056123-e1609885817397.jpg" alt="Training Image" />
              <div className="training-content">
                <div className="training-date">Sunday, Sep 4, 12:00 PM</div>
                <div className="training-title">Training Title</div>
                <div className="training-description">
                  Quis autem similique dolorem ut sit odit perspi ciatis. Et perferendis est quia magni et
                  sapie nte neces sitatibus. Id est eius expedita quasi voluptas similique ut sit odit
                  perspiciatis.
                </div>
              </div>
            </div>

            <div className="training-card">
              <img src="https://cdn.gobankingrates.com/wp-content/uploads/2021/01/savings-iStock-1177056123-e1609885817397.jpg" alt="Training Image" />
              <div className="training-content">
                <div className="training-date">Sunday, Sep 4, 12:00 PM</div>
                <div className="training-title">Training Title</div>
                <div className="training-description">
                  Quis autem similique dolorem ut sit odit perspi ciatis. Et perferendis est quia magni et
                  sapie nte neces sitatibus. Id est eius expedita quasi voluptas similique ut sit odit
                  perspiciatis.
                </div>
              </div>
            </div>

            <div className="training-card">
              <img src="https://cdn.gobankingrates.com/wp-content/uploads/2021/01/savings-iStock-1177056123-e1609885817397.jpg" alt="Training Image" />
              <div className="training-content">
                <div className="training-date">Sunday, Sep 4, 12:00 PM</div>
                <div className="training-title">Training Title</div>
                <div className="training-description">
                  Quis autem similique dolorem ut sit odit perspi ciatis. Et perferendis est quia magni et
                  sapie nte neces sitatibus. Id est eius expedita quasi voluptas similique ut sit odit
                  perspiciatis.
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>
    );
  }
}
