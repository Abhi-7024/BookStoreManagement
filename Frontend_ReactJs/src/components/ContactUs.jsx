import React from 'react';

export const ContactUs = () => {
  return (
    <div className="container-fluid col-md-6 contact shadow p-3 mb-5 bg-white rounded">
      <div className="row justify-content-center">
        <div className="col bg-primary rounded p-5">
          <h2 className="text-white text-center">Contact Us</h2>
          <form>
            <div className="form-group mb-3">
              <label htmlFor="name" className="text-white">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email" className="text-white">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="message" className="text-white">Message</label>
              <textarea className="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" className="btn btn-dark mx-auto d-block">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
