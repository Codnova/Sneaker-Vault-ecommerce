import { Container, Row, Col, Spinner, Image} from "react-bootstrap";
import CheckoutForm from "./CheckoutForm";
import success from "../assets/success.gif"
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../services/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  writeBatch,
  Timestamp,
} from "firebase/firestore";

function Checkout() {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const { cart, total, clearCart } = useContext(CartContext);

  async function createOrder({ name, email, phone, address }) {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
          address
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };
      const batch = writeBatch(db);
      const outOfStock = [];
      console.log("cart:", cart);
      const ids = cart.map((prod) => prod.itemId);
      console.log("ids:", ids);
      
      const productsRef = collection(db, "products");
      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where("id", "in", ids))
      );
      const { docs } = productsAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;
        const productAddedToCart = cart.find((prod) => prod.itemId === Number(doc.id));
        const prodQuantity = productAddedToCart?.quantity;
      
        console.log("Checking stock for product:", doc.id);
        console.log("Stock in DB:", stockDb, "Quantity in Cart:", prodQuantity);
      
        if (stockDb >= prodQuantity) {
          console.log("Updating stock for product:", doc.id);
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          console.log("Out of stock for product:", doc.id);
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });
      
      console.log("Out of stock items:", outOfStock);
      
      if (outOfStock.length === 0) {
        console.log("Committing batch update");
        await batch.commit();
        const orderRef = collection(db, 'orders');
        const orderAdded = await addDoc(orderRef, objOrder)
        setOrderId(orderAdded.id);
        clearCart();

      } else {
        console.error("Some items are out of stock");
      }
    } catch (error) {
      console.error("Hubo un problema creando la orden: ", error);
    } finally {
      setLoading(false);
    }
    
  }

  if (loading) {
    return (
      <Container className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Row>
          <Col xs="auto">
            <Spinner animation="border" role="status" variant="dark">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs="auto">
            <h1>Your order is being created</h1>
          </Col>
        </Row>
      </Container>
    );
  }

  if (orderId) {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className="mt-3 text-center">Checkout Completed</h1>
            <h2 className="mt-3 text-center">Your order number is: {orderId}</h2>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center mt-3">
            <Image fluid src={success} />
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mt-3 text-center">Checkout</h1>
        </Col>
      </Row>
      <CheckoutForm onConfirm={createOrder}/>
    </Container>
  );
}

export default Checkout;
