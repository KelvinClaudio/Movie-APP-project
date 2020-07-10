import React from "react";

function Contact() {
   const handleSubmit = e => {
      e.preventDefault();
      alert("success");
   };
   window.alert("Hanya Prototype Formnya belum bisa digunakan");
   return (
      <div className="contact">
         <div className="container">
            <div class="form">
               <div className="form-row">
                  <div className="form-group col-md-6">
                     <label htmlFor="inputFirstName4">First Name</label>
                     <input
                        type="text"
                        className="form-control"
                        id="inputFirstName4"
                        placeholder="Bob"
                        required
                     />
                  </div>
                  <div className="form-group col-md-6">
                     <label htmlFor="inputLastName4">Last Name</label>
                     <input
                        type="text"
                        className="form-control"
                        id="inputLastName4"
                        placeholder="Marley"
                        required
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
                     required
                  />
               </div>
               <div className="form-group">
                  <label htmlFor="inputMessage2">Your Message</label>
                  <textarea
                     type="text"
                     className="form-control"
                     id="inputMessage2"
                     placeholder="There are some bugs ..."
                     required
                  ></textarea>
               </div>
               <button className="btn btn-primary mt-3" onClick={handleSubmit}>
                  Send
               </button>
            </div>
         </div>
      </div>
   );
}

export default Contact;
