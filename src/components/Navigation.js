import React from 'react'
// import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'



const Navigation = () => {
    return (

            <>
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">BUCKETLIST</Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/items">Bucket List Items</Nav.Link>
                </Nav>
              </Navbar>
            </>
    )
}
export default Navigation