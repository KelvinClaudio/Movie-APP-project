import React from "react";
import SearchForm from "./SearchForm";

function Home() {
   return (
      <div className="jumbotron jumbotron-fluid">
         <div className="container">
            <h1 className="display-4 font-weight-light mb-3">
               Search <span className="font-weight-bold">Movies</span>
            </h1>
            <SearchForm />
         </div>
      </div>
   );
}

export default Home;
