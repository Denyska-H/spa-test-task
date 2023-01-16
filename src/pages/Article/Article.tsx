import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { ArticleProps } from "../../components/ArticleInfo/types";
import { ArticleInfo } from "../../components";

function Article() {
  const { infoID } = useParams<{ infoID?: string }>();
  const [detailedInfo, setDetailedInfo] = useState<Array<ArticleProps>>([]);

  useEffect(() => {
    async function fetchDetailedData() {
      try {
        const { data } = await axios.get(
          "https://api.spaceflightnewsapi.net/v3/articles",
        );
        setDetailedInfo(data);
      } catch (error) {
        alert("Something went wrong!");
      }
    }
    fetchDetailedData();
  }, []);

  const filteredInfoID = detailedInfo.filter(
    (elem) => elem.id === Number(infoID),
  );

  return (
    <section className="article">
      {filteredInfoID.map((info) => (
        <ArticleInfo key={info.id} {...info} />
      ))}
    </section>
  );
}

export default Article;
