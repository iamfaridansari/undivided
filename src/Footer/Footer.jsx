import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-white py-2">
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-md-6 col-sm-12">
            <p className="m-0">Copyright &#169; Farid Ansari</p>
          </div>
          <div className="col-md-6 col-sm-12 social-icons">
            <a href="https://www.instagram.com/iamfaridansari/" className="me-3 fs-5 instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="tel:9819032802" className="me-3 fs-5 whatsapp">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="mailto:faridansari98190@gmail.com" className="me-3 fs-5 email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="#" className="me-3 fs-5 linkedin">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/iamfaridansari" className="me-3 fs-5 github">
            <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
