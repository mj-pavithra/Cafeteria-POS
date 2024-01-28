import React, { useState, useEffect } from "react";
import { ref, get, getDatabase } from 'firebase/database';
import { db } from "../firebase";
import "../css/Menu.css";


function OrderList() {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ordersRef = ref(db, 'orders');
        const ordersSnapshot = await get(ordersRef);

        const orders = [];
        ordersSnapshot.forEach((orderSnapshot) => {
          orders.push(orderSnapshot.val());
        });

        setOrderData(orders);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="menu-list">
      <div className="menu-header-txt">
        <h2 className="menu-header-txt">Order List</h2>
      </div>
      <div className="menu-list-body">
      <table>
      <thead>
        <tr>
          <th>Category ID</th>
          <th>Date</th>
          <th>Item Description</th>
          <th>Item Name</th>
          <th>Price</th>
          <th>Time</th>
          <th>User ID</th>
        </tr>
      </thead>
      <tbody>
        {orderData.map((order, i) => (
          <tr key={i}>
            <td>{order.categoryId}</td>
            <td>{order.date}</td>
            <td>{order.itemDescription}</td>
            <td>{order.itemName}</td>
            <td>Rs.{order.price}</td>
            <td>{order.time}</td>
            <td>{order.userId}</td>
          </tr>
        ))}
      </tbody>
    </table>
    
      </div>
    </div>
  );
}

export default OrderList;
