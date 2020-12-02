import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <input
          onChange={props.onChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search"
        />
        <button type="submit" onClick={props.onClick} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
