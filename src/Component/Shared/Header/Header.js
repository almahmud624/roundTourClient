import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" className="bg-indigo-800" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Round <span className="bg-blue-600 shadow-sm py-0 px-1 rounded-sm text-white">Tour</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={NavHashLink} className="text-blue-200 font-medium transform hover:text-white transition duration-500" to="/home" activeStyle={{ color: 'white' }}>Home</Nav.Link>
                        <Nav.Link as={NavHashLink} className="text-blue-200 font-medium transform hover:text-white transition duration-500" to="/orders" activeStyle={{ color: 'white' }}>My Orders</Nav.Link>
                        <Nav.Link as={NavHashLink} className="text-blue-200 font-medium transform hover:text-white transition duration-500" to="/manage-orders" activeStyle={{ color: 'white' }}>Manage Orders</Nav.Link>
                        <Nav.Link as={NavHashLink} className="text-blue-200 font-medium transform hover:text-white transition duration-500" to="/add-package" activeStyle={{ color: 'white' }}>Add Package</Nav.Link>
                        <Nav.Link as={NavHashLink} className="text-blue-200 font-medium transform hover:text-white transition duration-500" to="/about" activeStyle={{ color: 'white' }}>About</Nav.Link>
                        {user?.email ? <Nav.Link onClick={logOut} className="border-0 text-blue-200 font-medium hover:text-white transition duration-500"><i className="fas fa-sign-out-alt"></i></Nav.Link> : <Nav.Link as={NavHashLink} to="/login" className="text-blue-200 font-medium transform hover:text-white transition duration-500" activeStyle={{ color: 'white' }}><i className="fas fa-user"></i></Nav.Link>}
                        <Navbar.Text className="text-green-400 font-medium">
                            <Link to="/login" className="text-blue-200 font-medium"> {user?.email && <div className="h-9 w-9 lg:mb-0 mr-4 mx-auto">
                                <img src={user?.photoURL} className="h-full w-full rounded-full overflow-hidden shadow" alt="" />
                            </div>}</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;