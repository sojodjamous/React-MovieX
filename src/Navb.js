import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import img from './Logo.png'



function Navb() {

 
    

    return (
      <>
        <Navbar className="nav" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={img}
                width="40"
                height="40"
                className="d-inline-block align-top"
              />{' '}
             
            </Navbar.Brand>
            
            <Nav className="me-auto">
            <Nav.Link   href="/M">Movies</Nav.Link>
            <Nav.Link href="https://tv.alfajertv.com/live-westbank-1-a.php">Tv Series</Nav.Link>
            <Nav.Link href="/Search">Search</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>

          </Nav>
          </Container>
          <Nav className="me-auto"> 
          <Nav.Link href="/Login">Login </Nav.Link>

          </Nav>

        </Navbar>
      </>
    );
    function Link({href,children, ...props}){
      const path=window.location.pathname
      return(
        <li className={path===href ? "active": ""}>

          <a href={href} {...props}>
          {children}</a>
        </li>
      )
    }
  }


  
  export default Navb;
