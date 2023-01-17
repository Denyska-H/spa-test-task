import { Link } from "react-router-dom";
import Highlighter from "react-highlight-words";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EastIcon from "@mui/icons-material/East";

import { TSearchResult } from "./types";

function SearchResults({ ...props }: TSearchResult) {
  const dateOfPost = props.publishedAt.slice(0, 10);
  const description = `${props.summary.slice(0, 100)}...`;

  return (
    <div className="results__column item">
      <div className="item__block">
        <div className="item__img">
          <Link to={`/article/${props.id}`}>
            <img src={props.imageUrl} alt="Something went wrong..." />
          </Link>
        </div>
        <div className="item__bottom">
          <div className="item__date">
            <CalendarTodayIcon />
            <span>{dateOfPost}</span>
          </div>
          <Link to={`/article/${props.id}`} className="item__title">
            <Highlighter
              searchWords={[props.query]}
              textToHighlight={props.title}
            />
          </Link>
          <div className="item__info">
            <Highlighter
              searchWords={[props.query]}
              textToHighlight={description}
            />
          </div>
        </div>
        <Link to={`/article/${props.id}`} className="item__read-more">
          <span>Read more</span>
          <EastIcon />
        </Link>
      </div>
    </div>
  );
}

export default SearchResults;
