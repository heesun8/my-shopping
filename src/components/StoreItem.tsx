import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart();

    const quantity = getItemQuantity(id);

    return (
        <Card className="h-100">
            <Card.Img
                variant="top"
                src={imgUrl}
                height="200px"
                style={{ objectFit: "cover" }}
            />

            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between 
                align-items-baseline mb-4">
                    <span style={{ fontFamily: "Open Sans", fontWeight: "400" }} className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <div>
                    {quantity === 0 ? (
                        <Button
                            style={{
                                backgroundColor: "#7A4988",
                                borderColor: "white",
                                fontFamily: "Poppins"
                            }}
                            className="w-100"
                            onClick={() => increaseCartQuantity(id)
                            }>
                            + Add To Cart
                        </Button>)
                        : (
                            <div
                                className="d-flex align-items-center flex-column"
                                style={{ gap: "0.5rem" }}
                            >
                                <div
                                    className="d-flex align-items-center justify-content-center"
                                    style={{ gap: "0.5rem" }}
                                >
                                    <Button
                                        style={{
                                            backgroundColor: "#865FCF",
                                            borderColor: "white",
                                        }}
                                        onClick={() => decreaseCartQuantity(id)}
                                    >-</Button>
                                    <div>
                                        <span style={{ fontFamily: "Poppins" }} className="fs-3">{quantity}</span> in cart
                                    </div>
                                    <Button
                                        style={{
                                            backgroundColor: "#865FCF",
                                            borderColor: "white",
                                        }}
                                        onClick={() => increaseCartQuantity(id)}
                                    >+</Button>

                                    <Button
                                        style={{
                                            backgroundColor: "#a10450",
                                            borderColor: "white",
                                            fontFamily: "Poppins",
                                            fontWeight: "400"
                                        }}
                                        variant="danger"
                                        size="sm"
                                        onClick={() => removeFromCart(id)}
                                    >Remove</Button>
                                </div>

                            </div>
                        )}
                </div>
            </Card.Body>
        </Card>
    );
}