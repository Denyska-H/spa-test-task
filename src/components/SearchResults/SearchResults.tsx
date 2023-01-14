import { Link } from "react-router-dom";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EastIcon from "@mui/icons-material/East";

import placeholder from "../../assets/img/placeholder.jpg";

function SearchResults() {
  return (
    <section className="results">
      <div className="container">
        <div className="results__title">Results: 6</div>
        <hr className="results__hr" />

        <div className="results__row">
          <div className="results__column item">
            <div className="item__block">
              <div className="item__img">
                <img src={placeholder} alt="" />
              </div>
              <div className="item__bottom">
                <div className="item__date">
                  <CalendarTodayIcon />
                  <span>June 29th, 2021</span>
                </div>
                <div className="item__title">
                  The 2020 World`s Most Valuable Brands
                </div>
                <div className="item__info">
                  Non sed molestie tortor massa vitae in mattis. Eget vel
                  consequat hendrerit commodo libero aliquam. Urna arcu nunc
                  tortor vitae pharetra...
                </div>
                <Link to="/article" className="item__read-more">
                  <span>Read more</span>
                  <EastIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchResults;
