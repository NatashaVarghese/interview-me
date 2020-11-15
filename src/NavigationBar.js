import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }

  .navbar-brand {
      color: #bbb;
  }

  a {
   text-decoration:none; 
   padding: 10px;
  }

  li, ul {
    display: inline-block;
    justify-content: space-around;
  }

`;

class NavigationBar extends React.Component {
    render() {
        return(
          <Styles>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">Im</a>
            <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/interview">Interview</a>
            </li>
          </ul>
          </nav>
          </Styles>
        );
    }
}
export default NavigationBar;