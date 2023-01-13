import { Row, Col } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/bedroom.json"

export function Bedroom() {
    return (
        <>
            <h1
                style={{ color: "#630436", fontFamily: "Lora" }}
                className="mb-4 d-flex justify-content-center"
            >Bedroom</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {storeItems.map(item => (
                    <Col key={item.id}>
                        <StoreItem {...item} />
                    </Col>
                ))}
            </Row>
        </>
    )
}