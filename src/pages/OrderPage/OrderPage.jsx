import React from "react";
import "./OrderPage.css";
import Type from "../../components/Type";

const OrderPage = () => {
  return (
    <div>
      <div className="title">Travel Products</div>
      <Type orderType="products"/>
      <div className="bottom">
        <Type orderType="options" />
        <div className="total price">
          <div className="title">Total Price: </div>
          <div>원</div>
          <button className="order-button">주문</button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
