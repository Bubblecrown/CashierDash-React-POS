import axios from "axios";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import OrderDetails from "../../../components/OrderDetails";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      const res = await axios.get("/orders");
      setOrders(res.data);
    };

    fetchOrders();
  }, []);
  if (isEmpty(orders))
    return (
      <Container>
        <div className="col-md-5 col-xs-12 text-center m-auto">
          <img
            className="img-fluid mb-5"
            src="https://www.tasteofindiasuvai.com/public/assets/images/empty.png"
          />
          <h2>The order is empty</h2>
          <p>Look like you have not added anything order.</p>
        </div>
      </Container>
    );
  return (
    <Container>
      <Row sm={1} md={2} className="g-2 my-2">
        {orders.map((order) => (
          <Col key={order.id}>
            <Card>
              <Card.Header>
                {order.name || "Guest"}, {order.email || "์N/A"},
              </Card.Header>
              <Card.Body>
                <OrderDetails products={order.products} editable={false}/>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Orders;
