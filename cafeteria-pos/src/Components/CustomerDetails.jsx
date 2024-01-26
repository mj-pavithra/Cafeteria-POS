import React, { useState, useEffect } from "react";
import { ref, get, getDatabase } from 'firebase/database';
import { db } from "../firebase";

import "../css/Menu.css";

function CustomerDetails() {
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const customersRef = ref(db, 'customerList'); // Assuming you have a 'customerList' node in your database
        const customersSnapshot = await get(customersRef);

        const customers = [];
        customersSnapshot.forEach((customerSnapshot) => {
          customers.push(customerSnapshot.val());
        });

        setCustomerData(customers);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="customer-details">
      <div className="customer-details-header">
        <h2>Customer Details</h2>
      </div>
      <div className="customer-details-body">
        <table>
          <thead>
            <tr>
              {customerData.length > 0 && Object.keys(customerData[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {customerData.map((customer, i) => (
              <tr key={i}>
                {Object.values(customer).map((value, j) => (
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

export default CustomerDetails;
