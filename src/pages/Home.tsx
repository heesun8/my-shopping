import Button from "react-bootstrap/Button"
import Nav from "react-bootstrap/Nav"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { NavLink } from "react-router-dom"

export function Home() {
    return (
        <div>
            <h2 
            style={{fontFamily: "Arvo"}}
            className="d-flex justify-content-center mt-5">Calluna V.</h2>
            <Row 
            md={2}
            lg={2}
            xs={1}
            className="d-flex align-items-center mt-5">
                <Col 
                className="flex-1 d-flex justify-content-start align-items-center align-content-start flex-column "
                >
                    <h2
                    style={{fontFamily: "Lato", fontWeight: ""}}
                    >CheckIn. CheckOut. MoveOut.</h2>
                    <p>Weeding out just the essentials for that solo lifestyle</p>
                    <Nav.Link to="/bedroom" as={NavLink}>
                        <Button
                        style={{
                            backgroundColor: "purple",
                            borderColor: "#CBC3E3",
                            fontFamily: "Poppins"
                        }}
                        >
                            Browse
                            </Button>
                    </Nav.Link>
                </Col>
                <Col 
                className="mt-3"
                >
                    <img
                        src="/imgs/moving5.png"
                        width="100%"
                        height="100%"
                        alt="home-image"
                    />
                </Col>
            </Row>
        </div>

    );
}