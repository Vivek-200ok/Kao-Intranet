import * as React from 'react';
import styles from './DepartmentalUpdates.module.scss';
import { IDepartmentalUpdatesProps } from './IDepartmentalUpdatesProps';
import { escape } from '@microsoft/sp-lodash-subset';


export interface IDepartmentalUpdatesState {
}

require('../assets/css/style.css');

export default class DepartmentalUpdates extends React.Component<IDepartmentalUpdatesProps, IDepartmentalUpdatesState> {

  constructor(props: IDepartmentalUpdatesProps, state: IDepartmentalUpdatesState) {
      super(props);
  
      this.state = {
      };
  
  }

  public render(): React.ReactElement<IDepartmentalUpdatesProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section id="departmentalUpdates">
    
      </section>
    );
  }
}
