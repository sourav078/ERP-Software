import React from "react";
import "./product_purchase_report.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


const Product_Purchase_Report = () => {
  const location = useLocation();

  const [rows, setRows] = useState([]);
  useEffect(() => {
    localStorage.setItem('x-access-token', JSON.stringify(location.state.accessToken));

    const fetchData = async () => {
      try {
        const response_getAllSaleTable = await fetch(
          "http://194.233.87.22:5001/api/sale_table/getSaleTable",
          {
              method: "POST",

              headers: {
                  "x-access-token":JSON.parse(
                      localStorage.getItem("x-access-token")
                  ),
              },
          }
        );

        const datas_getAllSaleTable = await response_getAllSaleTable.json();

        setRows(datas_getAllSaleTable);
      } catch (error) {
        console.log(error.message);
      }
    };

    // Call the function
    fetchData();
  }, []);
  return (
    <div className="full_div">
      <div className="first_row_div">
        <div className="container_search_column1">
          <div className="input-field">
            <label for="supplier-report-date-search">Date</label>
            <input type="date" id="supplier-report-date-search" />
            <button type="submit">Search</button>
          </div>
          <div className="input-field">
            <label for="supplier-report-invoice-id-search">Invoice ID</label>
            <input />
            <button type="submit">Search</button>
          </div>
           <div className="input-field">
            <label for="supplier-search">Supplier</label>
            <input />
            <button type="submit">Search</button>
          </div>
        </div>
        <div className="container_search_column2">
          <div className="input-field">
            <label for="supplier-from-date-search">From Date</label>
            <input type="date" id="supplier-from-date-search" />
          </div>
          <div className="input-field">
            <label for="supplier-from-date-search">Supplier</label>
            <input type="date" id="supplier-search" />
            <button type="submit">Search</button>
          </div>
        </div>
        <div className="container_search_column3">
          <div className="input-field">
            <label for="supplier-from-date-search">Supplier</label>
            <input type="date" id="supplier-search" />
            <button type="submit">Search</button>
          </div>
          <div className="input-field">
            <button className="btn" type="submit">
              Show All
            </button>
          </div>
        </div>
        <div className="container_search_column4">
          <div className="input-field">
            <button className="btn" type="submit">
              Excel
            </button>
          </div>
        </div>
      </div>
      <div className="second_row_div">
        <div className="table_div table-wrapper">
          <table border={3} cellSpacing={2} cellPadding={10}>
            <tr>
              <th>Customer Name</th>
              <th>Customer ID</th>
              <th>Moblile No.</th>
              <th>Address</th>
              <th>Total Product Price</th>
              <th>Total Discount</th>
              <th>Total Service/Extra Charge</th>
              <th>Total</th>
              <th>Paid</th>
              <th>Due</th>
            </tr>
            {/* <tbody>
              {rows.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.cid}</td>
                  <td>{item.mobile_no}</td>
                  <td>{item.address}</td>
                  <td>{item.sum_total_product_price}</td>
                  <td>{item.sum_discount}</td>
                  <td>{item.sum_extra_charge}</td>
                  <td>{item.sum_total}</td>
                  <td>{item.sum_paid}</td>
                  <td>{item.sum_due}</td>
                </tr>
              ))}
            </tbody> */}
          </table>
        </div>
      </div>
      <div className="third_row_div">
        <div className="container_view_update">
          <div className="container_view">
            <div className="input-field">
              <label for="total-price-for-customer">Total</label>
              <input />
            </div>
            <div className="input-field">
              <label for="total-price-for-customer-paid">Paid</label>
              <input />
            </div>
            <div className="input-field">
              <label for="total-price-for-customer">Due</label>
              <input />
            </div>
          </div>
          <div className="container_update">
            <div className="container_update_supplier">
              <div className="container_update_column1">
                <div className="input-field">
                  <label for="supplier-id-for-purchase">Purchase ID</label>
                  <input />
                </div>
                <div className="input-field">
                  <label for="supplier-invoice">Invoice No.*</label>
                  <input />
                </div>
                <div className="input-field">
                  <select></select>
                  <button type="submit">View Invoice</button>
                </div>
                <div className="input-field">
                  <label for="">Entry Date</label>
                  <input />
                </div>
              </div>
              <div className="container_update_column2">
                <div className="input-field">
                  <label for="supplier-name">Supplier Name*</label>
                  <input />
                </div>
                <div className="input-field">
                  <label for="supplier-mobile">Mobile*</label>
                  <input />
                </div>
                <div className="input-field">
                  <label for="supplier-address">Address*</label>
                  <input />
                </div>
                <div className="input-field">
                  <label for="">Purchase Date</label>
                  <input type="date" />
                </div>
              </div>
              <div className="container_update_column3">
                <div className="input-field">
                  <label for="supplier-name">Total Price*</label>
                  <input />
                </div>
                <div className="input-field">
                  <label for="supplier-mobile">Paid*</label>
                  <input />
                </div>
                <div className="input-field">
                  <label for="supplier-address">Due*</label>
                  <input />
                </div>
                <div className="input-field">
                  <button type="submit">Update</button>
                  <button type="reset">Reset</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container_due_payment">
          <h3>Due Payment</h3>
          <div className="input-field">
            <select>
              <option>Hand Cash</option>
              <option>Bank Pyment</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_Purchase_Report;
