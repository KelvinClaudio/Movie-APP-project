import React from "react";
import { connect } from "react-redux";
import SearchForm from "./SearchForm";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

const mapStateToProps = state => {
   return {
      movies: state.movies,
      search: state.search,
      totalRes: state.totalRes,
      loading: state.loading,
   };
};

function SearchDetails({ movies, search, totalRes, loading }) {
   return (
      <section className="searchDetails">
         <SearchForm />
         <div className="desc">
            <h4 className="search">
               You Search For : <span>{search}</span>
            </h4>
            <h4>
               <span>{totalRes ? totalRes : "0"}</span> Movies Found
            </h4>
         </div>

         {totalRes ? (
            <div className="containerCard">
               {movies.map(movie => (
                  <Movie key={movie.imdbID} data={movie} />
               ))}
            </div>
         ) : (
            <div className="iconContainer">
               {loading ? (
                  <React.Fragment>
                     <i className="fas fa-film"></i>
                     <h3>Loading ...</h3>
                  </React.Fragment>
               ) : (
                  <h3>Not Found</h3>
               )}
            </div>
         )}
         {totalRes ? <Pagination /> : ""}
      </section>
   );
}

function Movie({ data }) {
   const noPic =
      "https://static.lyricsbogie.com/wp-content/uploads/2015/05/No-Poster102.jpg";
   return (
      <div className="card">
         <img
            className="card-img-top"
            src={data.Poster !== "N/A" ? data.Poster : noPic}
            alt={data.Title}
         />
         <div className="middle">
            <h4 className="text">
               {data.Title} | {data.Year}
            </h4>
            <Link to={`/searchDetails/${data.imdbID}`}>
               <button className="btn btn-outline-light">Details</button>
            </Link>
         </div>
      </div>
   );
}
export default connect(mapStateToProps)(SearchDetails);
