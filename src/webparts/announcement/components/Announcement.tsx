import * as React from 'react';
import styles from './Announcement.module.scss';
import { IAnnouncementProps } from './IAnnouncementProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp/presets/all';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface IAnnouncementState {

}

require('../assets/css/style.css');

export default class Announcement extends React.Component<IAnnouncementProps, IAnnouncementState> {

  constructor(props: IAnnouncementProps, state: IAnnouncementState) {
    super(props);

    this.state = {
      
    };

  }


  public render(): React.ReactElement<IAnnouncementProps> {
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
      <section id="announcement">
        <Slider {...settings}>
          <div className='Announcement-Header'>
            <div className="hero">
              <div className="overlay">
                <h1>BACK TO BUSINESS</h1>
                <p>Aut Magni Rem Quia Aliquam Molestiae. Impedit Consequatur Eaque Facere Iure Rerum Nes Ciunt Voluptatem Et. Delectus Eum Vitae Architecto. Dolores Nostrum Enim Et Tenetur</p>
              </div>
            </div>
          </div>

          <div className='Announcement-Header'>
            <div className="hero">
              <div className="overlay">
                <h1>BACK TO BUSINESS</h1>
                <p>Aut Magni Rem Quia Aliquam Molestiae. Impedit Consequatur Eaque Facere Iure Rerum Nes Ciunt Voluptatem Et. Delectus Eum Vitae Architecto. Dolores Nostrum Enim Et Tenetur</p>
              </div>
            </div>
          </div>


          <div className='Announcement-Header'>
            <div className="hero">
              <div className="overlay">
                <h1>BACK TO BUSINESS</h1>
                <p>Aut Magni Rem Quia Aliquam Molestiae. Impedit Consequatur Eaque Facere Iure Rerum Nes Ciunt Voluptatem Et. Delectus Eum Vitae Architecto. Dolores Nostrum Enim Et Tenetur</p>
              </div>
            </div>
          </div>

        </Slider>
        
      </section>
    );
  }
}
