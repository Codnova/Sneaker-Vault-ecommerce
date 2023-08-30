// Este componente contiene el Carrito de compras
import CartIcon from "../assets/CartIcon.svg";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import "../styles/CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartWidget() {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div className="contenedorImg">
      <Button variant="dark">
        <Image src={CartIcon} width={30} height={30} />
        {totalQuantity > 0 && (
          <Badge className="contadorCart" pill bg="danger">
            {totalQuantity}
          </Badge>
        )}
      </Button>
    </div>
  );
}

export default CartWidget;
