import * as React from 'react';
import styles from './DepartmentalUpdates.module.scss';
import { IDepartmentalUpdatesProps } from './IDepartmentalUpdatesProps';
import { escape } from '@microsoft/sp-lodash-subset';


export interface IDepartmentalUpdatesState {
}

require("../assets/style.css");


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
      userDisplayName,
      Title,
      backgroundImage,
      dateandtime,
      filePickerResult,
      departmentName
    } = this.props;

    const BannerImageLink = this.props.filePickerResult == undefined ? require('../assets/Department.png') : this.props.filePickerResult.fileAbsoluteUrl;

    return (
      <section id="departmentalUpdates">

        <div className='Departmental-container'>

          <div className="Departmental-header">{departmentName}</div>
          <span className='Departmental-Span'></span>
          <div className='Departmental-scrollbar'>

            <div className="Departmental-card">
              <img src={require('../assets/Department.png')} alt="Update Image" />
              <div className="Departmental-content">
                <div className="Departmental-date">Sunday, Sep 4, 12:00 PM</div>
                <div className="Departmental-title">Update Title</div>
                <div className="Departmental-text">
                    Quis autem similique dolorem ut sit odit perspiciatis. Et perferendis est quia magni 
                    et sapiente necessitatibus. Id est eius expedita quasi voluptas similique ut sit 
                    odit perspiciatis. Et perferendis wrendis est quia.
                </div>
              </div>
            </div>

            <div className="Departmental-card">
              <img src={require('../assets/Department.png')} alt="Update Image" />
              <div className="Departmental-content">
                <div className="Departmental-date">Sunday, Sep 4, 12:00 PM</div>
                <div className="Departmental-title">Update Title</div>
                <div className="Departmental-text">
                    Quis autem similique dolorem ut sit odit perspiciatis. Et perferendis est quia magni 
                    et sapiente necessitatibus. Id est eius expedita quasi voluptas similique ut sit 
                    odit perspiciatis. Et perferendis wrendis est quia.
                </div>
              </div>
            </div>

            <div className="Departmental-card">
              <img src={require('../assets/Department.png')} alt="Update Image" />
              <div className="Departmental-content">
                <div className="Departmental-date">Sunday, Sep 4, 12:00 PM</div>
                <div className="Departmental-title">Update Title</div>
                <div className="Departmental-text">
                    Quis autem similique dolorem ut sit odit perspiciatis. Et perferendis est quia magni 
                    et sapiente necessitatibus. Id est eius expedita quasi voluptas similique ut sit 
                    odit perspiciatis. Et perferendis wrendis est quia.
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>
    );
  }
}
