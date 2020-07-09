import React from "react";

function Contact() {
   return (
      <div className="contact">
         <div className="container">
            <form>
               <div className="form-row">
                  <div className="form-group col-md-6">
                     <label htmlFor="inputFirstName4">First Name</label>
                     <input
                        type="email"
                        className="form-control"
                        id="inputFirstName4"
                        placeholder="Bob"
                     />
                  </div>
                  <div className="form-group col-md-6">
                     <label htmlFor="inputLastName4">Last Name</label>
                     <input
                        type="email"
                        className="form-control"
                        id="inputLastName4"
                        placeholder="Marley"
                     />
                  </div>
               </div>
               <div className="form-group">
                  <label htmlFor="inputEmail4">Email</label>
                  <input
                     type="email"
                     className="form-control"
                     id="inputEmail4"
                     placeholder="Bobmarley666@gmail.com"
                  />
               </div>
               <div className="form-group">
                  <label htmlFor="inputMessage2">Your Message</label>
                  <textarea
                     type="text"
                     className="form-control"
                     id="inputMessage2"
                     placeholder="There are some bugs ..."
                  ></textarea>
               </div>
               <button type="submit" className="btn btn-primary mt-3">
                  Send
               </button>
            </form>
         </div>
      </div>
   );
}

export default Contact;
