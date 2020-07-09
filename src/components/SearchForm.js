import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { searchMovies } from "../redux/actions";
import { Link } from "react-router-dom";

function SearchForm() {
   const [search, setSearch] = useState("");

   const handleChange = e => {
      setSearch(e.target.value);
   };
   const dispatch = useDispatch();
   const fetchSearch = useCallback(
      () => dispatch(searchMovies(search.trim())),
      [dispatch, search]
   );
   const handleClick = () => {
      if (search) {
         fetchSearch();
         setSearch("");
      }
   };

   return (
      <div className="input-group">
         <input
            type="text"
            className="form-control"
            placeholder="Search By Movie Title"
            value={search}
            onChange={handleChange}
            required
            aria-describedby="basic-addon1"
         />
         <div className="input-group-prepend">
            <Link
               to="/searchDetails"
               className="btn-primary"
               onClick={handleClick}
            >
               <button className="btn btn-primary pl-4 pr-4" type="button">
                  Search
               </button>
            </Link>
         </div>
      </div>
   );
}

export default SearchForm;
