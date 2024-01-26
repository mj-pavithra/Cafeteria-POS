import React, { useState, useEffect } from "react";
import { ref, get, getDatabase } from 'firebase/database';
import { db } from "../firebase";
import "../css/Menu.css";


function OrderList() {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ordersRef = ref(db, 'orderList');
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
              {orderData.length > 0 && Object.keys(orderData[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orderData.map((order, i) => (
              <tr key={i}>
                {Object.values(order).map((value, j) => (
                  <td key={j}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderList;
