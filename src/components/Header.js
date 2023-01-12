import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav'


import { NavLink } from 'react-router-dom';

import Table from 'react-bootstrap/esm/Table';



const Header = () => {

    const [price,setPrice] = useState(0);
    // console.log(price);

    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-3">Title</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light"></NavLink>
                    </Nav>

                
                    <NavLink to="/" className="text-decoration-none text-light mx-3">Home </NavLink>
                    <NavLink to="/" className="text-decoration-none text-light mx-3">About </NavLink>
                    <NavLink to="/" className="text-decoration-none text-light mx-3">Blog</NavLink>
                    <NavLink to="/" className="text-decoration-none text-light mx-3">Contact</NavLink>
                </Container>

               

               

                  
            </Navbar>
        </>
    )
}

export default Header