import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { fetchPosts } from "../../features/PostInfo/asyncActions";

import { SearchBar, SearchResults } from "../../components";

function Home() {
  const dispatch = useAppDispatch();
  const { status, posts } = useSelector((state: RootState) => state.posts);

  const [query, setQuery] = useState("");
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value.toLowerCase());
  };

  useEffect(() => {
    async function fetchData() {
      dispatch(fetchPosts({ query }));
    }
    fetchData();
  }, [dispatch, query]);

  return (
    <div className="container">
      <SearchBar inputHandler={inputHandler} />
      <section className="results">
        <div className="results__row">
          {posts.map((post) => (
            <SearchResults key={post.id} {...post} query={query} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
