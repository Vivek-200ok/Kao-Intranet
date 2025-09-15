import * as React from 'react';
import styles from './Kudos.module.scss';
import { IKudosProps } from './IKudosProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp/presets/all';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface IKudosState {
}

require('../assets/css/style.css');

export default class Kudos extends React.Component<IKudosProps, IKudosState> {

  constructor(props: IKudosProps, state: IKudosState) {
    super(props);

    this.state = {

    };

  }

  public render(): React.ReactElement<IKudosProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      autoplay: true,
      cssEase: "linear",
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />
    };

    return (
      <section id="kudos">

        <div className="kudos-container">
          <div className="kudos-header">Kudos</div>
          <span className='kudos-Span'></span>

            <Slider {...settings}>

              <div className="kudos-card">
                <img src={require("../assets/Images/businessman-profession-3d-model-low-poly-obj.jpg")} alt="Scott Davies" />
                  <h2>Scott Davies</h2>
                  <p>
                    Quis autem similique dolorem ut sit odit perspiciatis. Et perferendis est quia magni et sapiente necessitatibus. Id est eius expedita quasi voluptas similique ut sit odit perspiciatis. Et perferendis wrendis est quia.
                  </p>
              </div>

              <div className="kudos-card">
                <img src={require("../assets/Images/businessman-profession-3d-model-low-poly-obj.jpg")} alt="Scott Davies" />
                  <h2>Scott Davies</h2>
                  <p>
                    Quis autem similique dolorem ut sit odit perspiciatis. Et perferendis est quia magni et sapiente necessitatibus. Id est eius expedita quasi voluptas similique ut sit odit perspiciatis. Et perferendis wrendis est quia.
                  </p>
              </div>

              <div className="kudos-card">
                <img src={require("../assets/Images/businessman-profession-3d-model-low-poly-obj.jpg")} alt="Scott Davies" />
                  <h2>Scott Davies</h2>
                  <p>
                    Quis autem similique dolorem ut sit odit perspiciatis. Et perferendis est quia magni et sapiente necessitatibus. Id est eius expedita quasi voluptas similique ut sit odit perspiciatis. Et perferendis wrendis est quia.
                  </p>
              </div>

            </Slider>

        </div>
       
      </section>
    );
  }
}
