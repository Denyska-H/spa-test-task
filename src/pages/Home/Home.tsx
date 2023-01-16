import { useEffect, useState } from "react";
import axios from "axios";

import { SearchBar, SearchResults } from "../../components";
import { SearchResultProps } from "../../components/SearchResults/types";

function Home() {
  const [postsInfo, setPostsInfo] = useState<Array<SearchResultProps>>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          "https://api.spaceflightnewsapi.net/v3/articles",
        );
        setPostsInfo(data);
        return data;
      } catch (error) {
        alert("Something went wrong!");
        return error;
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <SearchBar />
      <section className="results">
        <div className="results__title">Results: 6</div>
        <hr className="results__hr" />
        <div className="results__row">
          {postsInfo.map((postInfo) => (
            <SearchResults key={postInfo.id} {...postInfo} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
