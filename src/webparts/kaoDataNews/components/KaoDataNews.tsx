import * as React from 'react';
import styles from './KaoDataNews.module.scss';
import { IKaoDataNewsProps } from './IKaoDataNewsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp/presets/all';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Label } from 'office-ui-fabric-react';

export interface IKaoDataNewsState {
}

require('../assets/css/style.css');

export default class KaoDataNews extends React.Component<IKaoDataNewsProps, IKaoDataNewsState> {

  constructor(props: IKaoDataNewsProps, state: IKaoDataNewsState) {
    super(props);

    this.state = {

    };

  }

  public render(): React.ReactElement<IKaoDataNewsProps> {
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
      <section id="kaoDataNews">

        <div className="news-container">
          <Label className="news-header">Kao Data News</Label>

          <div className="News-Wrapper">

            <div className="featured-news">
              <div className="featured-label">Featured News</div>
              <div className="news-card">
                <img src="https://cdn.gobankingrates.com/wp-content/uploads/2021/01/savings-iStock-1177056123-e1609885817397.jpg" alt="Featured News" />
                <div className="featured-info">
                  <div className="news-title">News Title Goes Here</div>
                  <div className="news-desc">Some description goes here Some...</div>
                  <div className="news-date">Sep 05, 2025</div>
                </div>
              </div>
            </div>

            <div className="news-list">
              {[
                "https://cdn.gobankingrates.com/wp-content/uploads/2021/01/savings-iStock-1177056123-e1609885817397.jpg",
                "https://smartway2.com/wp-content/uploads/2021/04/shutterstock_708649936-980x622.jpg",
                "https://img.freepik.com/premium-photo/marketer-analityc-manager-team-dressed-suits-working-with-paper-charts-laptops-white-office-interior_506452-3517.jpg",
                "https://boostmeup.com/blog/wp-content/uploads/2023/10/Step-by-Step.jpg",
                "https://th.bing.com/th/id/R.39b4b6d36149500a1c2320255e2efcdb?rik=L1gNNJVF0TzL1w&riu=http%3a%2f%2f1.bp.blogspot.com%2f-Y0k3cYNTuG0%2fUqK_cexVySI%2fAAAAAAAAAoY%2frKNhU3432Zc%2fs640%2fprofessionals-traveler.jpg&ehk=L%2bSq05caLu4KczRuXdz7dG59R3oBV1%2bDqFCUi2D%2fzPM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
              ].map((imgUrl, index) => (
                <div key={index} className="news-card">
                  <div className="News-badge">
                    <img src={imgUrl} alt={`News ${index + 1}`} />
                    <div className="news-info">
                      <div className="news-title">News Title Goes Here</div>
                      <div className="news-desc">Some description goes here Some...</div>
                      <div className="news-date">Sep 05, 2025</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </section>
    );
  }
}
