import "../css/OrderList.css"

const orderData = [
  {
    "Order ID": "001",
    Date: "2024-01-01",
    "Customer Name": "Manoj Pavithra",
    Department: "Sales",
    Amount: 5,
    "Total Price (Rs)": 500.0,
  },
  {
    "Order ID": "002",
    Date: "2024-01-02",
    "Customer Name": "Sineth Thamuditha",
    Department: "Marketing",
    Amount: 3,
    "Total Price (Rs)": 300.0,
  },
    {
        "Order ID": "003",
        Date: "2024-01-03",
        "Customer Name": "Kavishka Anjuna",
        Department: "Sales",
        Amount: 2,
        "Total Price (Rs)": 200.0,
    },
    {
        "Order ID": "004",
        Date: "2024-01-04",
        "Customer Name": "Aruni Perera",
        Department: "Marketing",
        Amount: 1,
        "Total Price (Rs)": 100.0,
    },
    {
        "Order ID": "005",
        Date: "2024-01-05",
        "Customer Name": "Ayusha Shasthraka",
        Department: "Sales",
        Amount: 4,
        "Total Price (Rs)": 400.0,
    },
    {
        "Order ID": "006",
        Date: "2024-01-06",
        "Customer Name": "Kalana Weranga",
        Department: "Marketing",
        Amount: 2,
        "Total Price (Rs)": 200.0,
    },
    {
        "Order ID": "007",
        Date: "2024-01-07",
        "Customer Name": "Kanchana Jayarathne",
        Department: "Sales",
        Amount: 1,
        "Total Price (Rs)": 100.0,
    },
    {
        "Order ID": "008",
        Date: "2024-01-08",
        "Customer Name": "Sithum Pathum",
        Department: "Marketing",
        Amount: 3,
        "Total Price (Rs)": 300.0,
    },
    {
        "Order ID": "009",
        Date: "2024-01-09",
        "Customer Name": "Prarthana de Silva",
        Department: "Sales",
        Amount: 2,
        "Total Price (Rs)": 200.0,
    },
    {
        "Order ID": "010",
        Date: "2024-01-10",
        "Customer Name": "Chamath Bobugoda",
        Department: "Marketing",
        Amount: 1,
        "Total Price (Rs)": 100.0,
    },
    {
        "Order ID": "011",
        Date: "2024-01-11",
        "Customer Name": "Avishka Lakshan",
        Department: "Sales",
        Amount: 5,
        "Total Price (Rs)": 500
    },
];

function OrderList() {
    return (
      <div className="order-list">
        <div className="order-list-head">
          <h2>Order List</h2>
        </div>
        <div className="order-list-body">
          <table>
            <thead>
              <tr>
                {Object.keys(orderData[0]).map((key) => (
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