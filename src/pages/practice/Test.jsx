import React from 'react'
import './test.css'
import { useEffect, useState } from 'react'

const Test = () => {

    const [rows, setRows] = useState([]);

     useEffect(() => {
        const fetchData = async () => {

            const response_getAllSaleTable = await fetch('http://194.233.87.22:5001/api/sale_table/getSaleTable');

            const datas_getAllSaleTable = await response_getAllSaleTable.json();

            setRows(datas_getAllSaleTable);
            
        }
    // Call the function
        fetchData();
    }, []);

    return (
        <div className='table-wrapper'>
            <table border={3} cellSpacing={2} cellPadding={10} >
                        <tr>
                            <th >SL</th>
                            <th >Invoice</th>
                            <th >Customer</th>
                            <th >CID</th>
                            <th >ID/Code</th>
                            <th >Product</th>
                            <th >Type/No</th>
                            <th >Warranty</th>
                            <th >Sale Price</th>
                            <th >Quantity</th>
                            <th >Unit</th>
                            <th >Total Tk</th>
                            <th >Sale Date</th>
                            <th >Entry Date</th>
                            <th >Shop</th>
                        </tr>
                        <tbody>
                            {
                     
                                rows.map((item) =>
                                    <tr  key={item.id}>
                                        <td >{item.serial}</td>
                                        <td >{item.challan_no}</td>
                                        <td>{item.customer_name}</td>
                                        <td>{item.cid}</td>
                                        <td>{item.product_code}</td>
                                        <td>{item.product_name}</td>
                                        <td>{item.model}</td>
                                        <td>{item.warranty}</td>
                                        <td>{item.purchase_price}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.unit}</td>
                                        <td>{item.total}</td>
                                        <td>{item.sell_date}</td>
                                        <td>{item.entry_date_time}</td>
                                        <td>{item.shop}</td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
            
        </div>
    )
}

export default Test

