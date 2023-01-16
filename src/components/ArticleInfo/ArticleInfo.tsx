import { Link } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";

import { ArticleProps } from "./types";

function ArticleInfo({ ...props }: ArticleProps) {
  return (
    <>
      <div className="article__img">
        <img src={props.imageUrl} alt="" />
      </div>
      <div className="container">
        <article className="article__block">
          <h2 className="article__title">{props.title}</h2>
          <div className="article__text">{props.summary}</div>
          <Link to="/" className="article__back">
            <WestIcon />
            <span>Back to homepage</span>
          </Link>
        </article>
      </div>
    </>
  );
}

export default ArticleInfo;
