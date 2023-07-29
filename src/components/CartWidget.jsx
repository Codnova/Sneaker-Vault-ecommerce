// Este componente contiene el Carrito de compras
import CartIcon from "../assets/CartIcon.svg";
import Image from "react-bootstrap/Image";
import Badge from 'react-bootstrap/Badge';
import "../styles/CartWidget.css";

function CartWidget () {
  return (
    <div className="contenedorImg">
      <Image src={CartIcon} width={30} height={30}/>
      <Badge className="contadorCart" pill bg="danger">1</Badge>  
    </div>
  )

}

export default CartWidget;