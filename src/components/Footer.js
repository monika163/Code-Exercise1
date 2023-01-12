import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav'


import { NavLink } from 'react-router-dom';

import Table from 'react-bootstrap/esm/Table';

const Footer = () => {

    const [price, setPrice] = useState(0);
    // console.log(price);

    return (

        <>
            <br></br> <br></br>
            <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-3">Copyright @ 2022, All Right Reserved</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light"></NavLink>
                    </Nav>

                    <NavLink to="/" className="text-decoration-none text-light mx-3">Back to Top </NavLink>

                </Container>
            </Navbar>
        </>
    )
}

export default Footer