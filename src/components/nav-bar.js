import React, { Component } from 'react';
import {Link} from 'react-router';

export default class NavBar extends Component {
  render() {
    return (


      <div className="navbar navbar-inverse bs-docs-nav" role="banner">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <img className='navbar-brand' alt='profile pic' src='/style/images/profile2.jpg' />
          </div>
          <nav className="collapse navbar-collapse bs-navbar-collapse" role="navigation">
            <ul className="nav navbar-nav">
              <li>
                <Link to='/'>About</Link>
              </li>
              <li>
                <Link to='/experience'>Experience</Link>
              </li>
              <li>
                <Link to='/education'>Education</Link>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Hobby <b className="caret"></b></a>
                <ul className="dropdown-menu">
                  <li><Link to='/astrophotography'>Astrophotography</Link></li>
                  <li><Link to='/exploring'>Exploring</Link></li>
                  <li><Link to='/yukibo'>YukiBo</Link></li>
                  <li><Link to='/others'>Others</Link></li>

                </ul>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

    );
  }
}







// <div>
//   <nav className="navbar navbar-inverse">
//     <div className="container-fluid">
//       <div className="navbar-header">
//         <a className="navbar-brand" href="#">WebSiteName</a>
//       </div>
//       <ul className="nav navbar-nav">
//         <li className="active"><a href="#">Home</a></li>
//         <li className="dropdown">
//           <a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1
//           <span className="caret"></span></a>
//           <ul className="dropdown-menu">
//             <li><a href="#">Page 1-1</a></li>
//             <li><a href="#">Page 1-2</a></li>
//             <li><a href="#">Page 1-3</a></li>
//           </ul>
//         </li>
//         <li><a href="#">Page 2</a></li>
//         <li><a href="#">Page 3</a></li>
//       </ul>
//     </div>
//   </nav>
// </div>
