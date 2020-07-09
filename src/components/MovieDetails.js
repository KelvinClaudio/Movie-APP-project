import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { KEY } from "../redux/actions";
function MovieDetails({ match }) {
   const [data, setData] = useState({});
   const Ratings = data.Ratings;
   const noPic =
      "https://static.lyricsbogie.com/wp-content/uploads/2015/05/No-Poster102.jpg";

   useEffect(() => {
      fetchData();
   });

   const fetchData = async () => {
      const response = await axios(
         `http://www.omdbapi.com/?i=${match.params.id}&apikey=${KEY}`
      );
      setData(response.data);
   };

   return (
      <div className="wrapper">
         <div className="buttonWrapper">
            <Link to="/searchDetails">
               <button className="btn btn-outline-danger">Go Back</button>
            </Link>
         </div>
         <div className="movieWrapper">
            <div className="imgWrapper">
               <img src={data.Poster ? data.Poster : noPic} alt="" />
            </div>
            <div className="card">
               <div className="title">
                  <h4>{data.Title}</h4>
                  <hr />
                  <div className="details">
                     <div className="plot">
                        <h5>SYPNOPSIS</h5>
                        <p>{data.Plot}</p>
                     </div>
                     <hr />
                     <div className="moreDetails">
                        <div className="movieDetails">
                           <h6>
                              Genre: <span>{data.Genre}</span>
                           </h6>
                           <h6>
                              Rated: <span>{data.Rated}</span>
                           </h6>
                           <h6>
                              Released: <span>{data.Released}</span>
                           </h6>
                           <h6>
                              Runtime: <span>{data.Runtime}</span>
                           </h6>
                           <h6>
                              BoxOffice: <span>{data.BoxOffice}</span>
                           </h6>
                        </div>
                        <div className="personDetails">
                           <h6>
                              Actors: <span>{data.Actors}</span>
                           </h6>
                           <h6>
                              Director: <span>{data.Director}</span>
                           </h6>
                           <h6>
                              Awards: <span>{data.Awards}</span>
                           </h6>
                           <h6>
                              Production: <span>{data.Production}</span>
                           </h6>
                        </div>
                     </div>
                     <hr />
                     <div className="ratings">
                        <h5>
                           IMDB:
                           <br /> <span>{data.imdbRating}</span>
                        </h5>
                        {Ratings
                           ? Ratings.map((rating, i) => (
                                <h5 key={i}>
                                   {rating.Source}: <span>{rating.Value}</span>
                                </h5>
                             ))
                           : ""}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default MovieDetails;
