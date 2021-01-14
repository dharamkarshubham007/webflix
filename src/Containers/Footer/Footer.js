import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <div className="d-flex flex-row justify-content-start align-items-start ml-4">
          <div className="items text-white"> Home | &nbsp; </div>
          <div className="items text-white"> Terms and Conditions | &nbsp;</div>
          <div className="items text-white"> Privacy Policy | &nbsp; </div>
          <div className="items text-white"> Collection Statement | &nbsp;</div>
          <div className="items text-white"> Help | &nbsp; </div>
          <div className="items text-white"> Manage Account | &nbsp; </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
