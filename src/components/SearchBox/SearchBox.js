import React, { useState } from "react";
import "./SearchBox.css";
import { useDispatch } from "react-redux";
import {
  getMovieAction,
  searchMovieAction,
} from "../../redux-manager/Movies/actions";

const SearchBox = () => {
  const [searchLine, setSearchLine] = useState("");
  const searchLineChangeHandler = (e) => {
    setSearchLine(e.target.value);
  };

  const dispatch = useDispatch();

  const searchBoxSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(getMovieAction(searchLine));
  };

  return (
    <div className="search-box">
      <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
        <label className="search-box__form-label">
          Искать фильм по названию:
          <input
            value={searchLine}
            type="text"
            className="search-box__form-input"
            placeholder="Например, Shawshank Redemption"
            onChange={searchLineChangeHandler}
          />
        </label>
        <button
          type="submit"
          className="search-box__form-submit"
          disabled={!searchLine}
        >
          Искать
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
