import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import debounce from "lodash.debounce";

import { useAppDispatch } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { fetchPosts } from "../../features/PostInfo/asyncActions";

import { Loader, SearchBar, SearchResults } from "../../components";

function Home() {
  const dispatch = useAppDispatch();
  const { status, posts } = useSelector((state: RootState) => state.posts);
  const [query, setQuery] = useState("");
  const updateSearchValue = useCallback(
    debounce((str: string) => {
      setQuery(str);
    }, 150),
    [],
  );
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchValue(e.currentTarget.value);
  };

  useEffect(() => {
    async function fetchData() {
      dispatch(fetchPosts({ query }));
    }
    fetchData();
  }, [dispatch, query]);

  const items = posts.map((post) => (
    <SearchResults key={post.id} {...post} query={query} />
  ));

  return (
    <div className="container">
      <SearchBar inputHandler={inputHandler} />
      <section className="results">
        {posts.length === 0 ? (
          <div>
            {status === "pending" ? (
              <Loader />
            ) : (
              <div className="results__invalid">
                😭 Can`t find anything 😭 <br /> Try again!
              </div>
            )}
          </div>
        ) : (
          <div className="results__row">{items}</div>
        )}
      </section>
    </div>
  );
}

export default Home;
