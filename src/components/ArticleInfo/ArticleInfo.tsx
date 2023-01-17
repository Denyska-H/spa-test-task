import { Link } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";

import { TArticle } from "./types";

function ArticleInfo({ imageUrl, summary, title }: TArticle) {
  return (
    <>
      <div className="article__img">
        <img src={imageUrl} alt="Something went wrong..." />
      </div>
      <div className="container">
        <article className="article__block">
          <h2 className="article__title">{title}</h2>
          <div className="article__text">{summary}</div>
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
