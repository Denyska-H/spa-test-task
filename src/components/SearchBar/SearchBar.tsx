import SearchIcon from "@mui/icons-material/Search";
import { SearchBarProps } from "./types";

function SearchBar({ ...props }: SearchBarProps) {
  return (
    <article className="filter">
      <h2 className="filter__title">Filter by keywords</h2>
      <div className="filter__search-bar">
        <SearchIcon />
        <input
          onChange={props.inputHandler}
          type="text"
          placeholder="Enter keywords"
          className="filter__input"
        />
      </div>
      <div className="filter__results">Results: {props.results}</div>
      <hr className="filter__hr" />
    </article>
  );
}

export default SearchBar;
