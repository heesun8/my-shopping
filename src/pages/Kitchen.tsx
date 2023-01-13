import { Row, Col } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/kitchen.json"

export function Kitchen() {
    return (
        <>
            <h1
                style={{ color: "#630436", fontFamily: "Lora" }}
                className="mb-4 d-flex justify-content-center"
            >Kitchen</h1>
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