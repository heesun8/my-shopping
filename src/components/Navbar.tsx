import { Button, Form, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { MdShoppingCart } from 'react-icons/md';
import "../styles/globals.css"
import { NavLink } from "react-router-dom"
import { SearchBar } from "./SearchBar";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart();
    return (
        <NavbarBs sticky="top" expand="lg" className="bg-white shadow-sm mb-3">
            <Container>
                <NavbarBs.Toggle aria-controls="navbarScroll" />
                <NavbarBs.Collapse id="navbarScroll">
                    <Nav className="me-auto navbar-nav-scroll align-items-center">
                        <Nav.Link to="/" as={NavLink}>
                            <img
                                src="/imgs/logo1.jpg"
                                width="50"
                                height="70"
                                className="d-inline-block align-top ml-2"
                                alt="logo"
                            />
                        </Nav.Link>
                        <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                        <Nav.Link to="/bedroom" as={NavLink}>Bedroom</Nav.Link>
                        <Nav.Link to="/bathroom" as={NavLink}>Bathroom</Nav.Link>
                        <Nav.Link to="/kitchen" as={NavLink}>Kitchen</Nav.Link>
                        <Nav.Link to="/livingroom" as={NavLink}>Living Room</Nav.Link>
                        {/* <Nav.Link to="/about" as={NavLink}>About</Nav.Link> */}
                    </Nav>
                    {/* <Form className="d-flex">
                        <Form.Control
                            // type="search"
                            placeholder="Search"
                            className="me-2"
                        // aria-label="Search"
                        /> */}

                        {/* <Button
                            variant="outline-secondary"
                            // style={{backgroundColor: "#B19CD7"}}
                            className="btn"
                        >Search</Button> */}
                    {/* </Form> */}
                </NavbarBs.Collapse>

                <Button
                    onClick={openCart}
                    style={{
                        width: "3rem",
                        height: "3rem",
                        position: "relative",
                        backgroundColor: "#B19CD7",
                        borderColor: "#CBC3E3"
                    }}
                    className="rounded-circle m-2"
                >
                    <MdShoppingCart color="#fff" fontSize={27} />
                    {cartQuantity > 0 && (
                        <div
                            className="rounded-circle d-flex justify-content-center
                        align-items-center"
                            style={{
                                color: "white",
                                width: "1.5rem",
                                height: "1.5rem",
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                transform: "translate(25%, 25%)",
                                backgroundColor: "purple",
                            }}
                        >
                            {cartQuantity}
                        </div>
                    )}
                </Button>

            </Container>
        </NavbarBs>
    )
}