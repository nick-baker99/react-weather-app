import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  }

  return (
    <AsyncPaginate 
      placeholder="Search cities..."
      debounceTimeout={600}
      value={search}
      onChange={handleChange}
    />
  );
}

export default Search;