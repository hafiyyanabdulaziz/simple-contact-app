import React from "react";
import SearchIcon from "../../assets/icons/SearchIcon";

const Search = () => {
  return (
    <div
      className='tooltip'
      data-tip='This feature is only available for premium members.'>
      <label className='input input-bordered flex items-center gap-2'>
        <input type='text' className='grow' placeholder='Search' />
        <SearchIcon />
      </label>
    </div>
  );
};

export default Search;
