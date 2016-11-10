import React from 'react';

const Footer = () => {
  return(
    <footer>
      <div className="row">
        <ul className="social-links cf">
            <li><a href="#"><i className="ion-social-facebook"></i></a></li>
            <li><a href="#"><i className="ion-social-twitter"></i></a></li>
            <li><a href="#"><i className="ion-social-googleplus"></i></a></li>
            <li><a href="#"><i className="ion-social-instagram"></i></a></li>


        </ul>
      </div>

      <div className="row">
          <p>Created by Anh Ho &copy; 2016</p>
      </div>
    </footer>
  );
}

export default Footer;
