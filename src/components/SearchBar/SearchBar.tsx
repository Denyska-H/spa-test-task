import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";
import { TSearchBar } from "./types";

function SearchBar({ inputHandler }: TSearchBar) {
  const { posts } = useSelector((state: RootState) => state.posts);

  return (
    <article className="filter">
      <h2 className="filter__title">Filter by keywords</h2>
      <div className="filter__search-bar">
        <SearchIcon />
        <input
          onChange={inputHandler}
          type="text"
          placeholder="Enter keywords"
          className="filter__input"
        />
      </div>
      <div className="filter__results">Results: {posts.length}</div>
      <hr className="filter__hr" />
    </article>
  );
}

export default SearchBar;
