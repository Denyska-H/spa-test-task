import { Link } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";

import placeholder from "../../assets/img/placeholder.jpg";

function Article() {
  return (
    <section className="article">
      <div className="article__img">
        <img src={placeholder} alt="" />
      </div>
      <div className="container">
        <article className="article__block">
          <h2 className="article__title">
            The 2020 World`s Most Valuable Brands
          </h2>
          <div className="article__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
            ornare convallis non etiam tincidunt tincidunt. Non dolor vel purus
            id. Blandit habitasse volutpat id dolor pretium, sem iaculis.
            Faucibus commodo mauris enim, turpis blandit. Porttitor facilisi
            viverra mi lacus lacinia accumsan. Pellentesque gravida ligula
            bibendum aliquet nulla massa elit. Ac faucibus donec sit morbi
            pharetra urna. Vel facilisis amet placerat ultrices lobortis proin
            nulla. Molestie tellus sed pellentesque tortor vitae eu cras nisl.
            Sem facilisi amet vitae ultrices nullam tellus. Pellentesque eget
            iaculis morbi at quis eget lacus, aliquam etiam. Neque ipsum,
            placerat vel convallis nulla orci, nunc etiam. Elementum risus
            facilisi mauris diam amet et sed. At aliquet id amet, viverra a
            magna lorem urna. Nibh scelerisque quam quam massa amet,
            sollicitudin vel non. Gravida laoreet neque tincidunt eu egestas
            massa vitae nibh. Nec ullamcorper amet tortor, velit.
          </div>
          <Link to="/" className="article__back">
            <WestIcon />
            <span>Back to homepage</span>
          </Link>
        </article>
      </div>
    </section>
  );
}

export default Article;
