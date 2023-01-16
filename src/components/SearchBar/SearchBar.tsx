import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <article className="filter">
      <h2 className="filter__title">Filter by keywords</h2>
      <div className="filter__search-bar">
        <SearchIcon />
        <input
          type="text"
          placeholder="Enter keywords"
          className="filter__input"
        />
      </div>
    </article>
  );
}

export default SearchBar;
