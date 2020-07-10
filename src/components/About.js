import React from "react";

function About() {
   return (
      <div className="about">
         <div className="card">
            <h2>About Us</h2>
            <hr />
            <p>
               This website was made for searching movie info and many more :)
            </p>
            <p>API: http://www.omdbapi.com/</p>
            <p>Background pic: https://unsplash.com/</p>
            <div className="social-icons">
               <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/KelvinClaudio8"
               >
                  <i className="fab fa-twitter fa-2x"></i>
               </a>
               <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/kelvinclaudio_/"
               >
                  <i className="fab fa-instagram fa-2x"></i>
               </a>
               <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/KelvinClaudio"
               >
                  <i className="fab fa-github fa-2x"></i>
               </a>
            </div>
         </div>
      </div>
   );
}

export default About;
