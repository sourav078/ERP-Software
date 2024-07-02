import React from "react";
import "./stock_operation.css";
import { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useLocation } from "react-router-dom";

const StockOperation = () => {
    const [isLoaded, setIsLoaded] = useState(true);

    return (
        <div className="full_div_stock_operation">
            <div className="first_row_div_stock_operation">
                <div className="search_div_stock_operation">
                    <label className="label_search_stock_operation">
                        Product Name
                    </label>
                    <input className="input_search_div_stock_operation"></input>
                    <label className="label_search_stock_operation">
                        Type/No.
                    </label>
                    <select className="select_search_div_stock_operation"></select>
                    <button className="button_search_div_stock_operation">
                        Search
                    </button>
                </div>
                <div className="show_all_stock_operation">
                    <button className="button_show_all_stock_operation">
                        {" "}
                        Show All
                    </button>
                </div>
            </div>
            <div className="second_row_div_stock_operation">
                <div className="table_wrapper_stock_operation table_div_stock_operation">
                    {/* {isLoaded ? (
                        <div className="rotating_lines_stock_operation">
                            <RotatingLines
                                strokeColor="grey"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="50"
                                visible={true}
                            />
                        </div>
                    ) : ( */}
                    <table border={3} cellSpacing={2} cellPadding={10}>
                        <tr>
                            <th>Stock Id</th>
                            <th>Product ID/Code</th>
                            <th>Product Name</th>
                            <th>Type/No.</th>
                            <th>Warranty</th>
                            <th>Avg. Purchase Price </th>
                            <th>Sale Price</th>
                            <th>Quantity</th>
                            <th>Unit</th>
                        </tr>
                        <tbody>
                            {/* {rows.map((item) => (
                                    <tr
                                        className="row_sale_expense_report_page"
                                        tabindex="0"
                                        onClick={() => handleClickTable(item)}
                                        key={item.id}
                                    >
                                        <td>{item.id}</td>
                                        <td>{item.type}</td>
                                        <td>{item.name}</td>
                                        <td>{item.amount}</td>
                                        <td>{item.paid}</td>
                                        <td>{item.due}</td>
                                        <td>{item.date}</td>
                                    </tr>
                                ))} */}
                        </tbody>
                    </table>
                    {/* )} */}
                </div>
            </div>
            <div className="third_row_div_stock_operation">
                <div className="container_update_stock">
                    <div className="container_update_stock_operation">
                        <div className="container_update_column1_stock">
                            <h5>Product Information</h5>
                            <div className="input_field_stock">
                                <label
                                    className="label_field_stock_operation"
                                    htmlFor="purchase-id"
                                >
                                    Stock ID
                                </label>
                                <input className="input_field_stock_operation" />
                            </div>
                            <div className="input_field_stock">
                                <label
                                    className="label_field_stock_operation"
                                    htmlFor="invoice-no"
                                >
                                    Product ID/Code
                                </label>
                                <input className="input_field_stock_operation" />
                            </div>
                            <div className="input_field_stock">
                                <label
                                    className="label_field_stock_operation"
                                    htmlFor="invoice-no"
                                >
                                    Product Name
                                </label>
                                <input className="input_field_stock_operation" />
                            </div>
                            <div className="input_field_stock">
                                <label
                                    className="label_field_stock_operation"
                                    htmlFor="invoice-no"
                                >
                                    Type/No.
                                </label>
                                <input className="input_field_stock_operation" />
                            </div>
                            <div className="input_field_stock">
                                <label
                                    className="label_field_stock_operation"
                                    htmlFor="invoice-no"
                                >
                                    Quantity
                                </label>
                                <input className="input_field_stock_operation" />
                            </div>
                        </div>
                        <div className="container_update_column1_stock">
                            <h5>Update Price</h5>
                            <div className="input_field_stock">
                                <label
                                    className="label_field_stock_operation"
                                    htmlFor="supplier-name"
                                >
                                    Warranty
                                </label>
                                <input className="input_field_stock_operation" />
                            </div>
                            <div className="input_field_stock">
                                <label
                                    className="label_field_stock_operation"
                                    htmlFor="mobile-number"
                                >
                                    Purchase Price
                                </label>
                                <input className="input_field_stock_operation" />
                            </div>
                            <div className="input_field_stock">
                                <label
                                    className="label_field_stock_operation"
                                    htmlFor="address"
                                >
                                    Sale Price
                                </label>
                                <input className="input_field_stock_operation" />
                            </div>
                            <div className="input_field_stock">
                                <label
                                    className="label_field_stock_operation"
                                    htmlFor="address"
                                >
                                    Min. Quantity
                                </label>
                                <input className="input_field_stock_operation" />
                            </div>
                            <div className="input_field_stock">
                                <button className="button_field_stock_operation">
                                    Reset
                                </button>
                                <button className="button_field_stock_operation">
                                    Update
                                </button>
                            </div>
                        </div>
                        <div className="container_update_column3_stock">
                            <h5>Add, Damage & Utilize</h5>
                            <div className="input_field_stock">
                                <label
                                    className="label_field_stock_operation"
                                    htmlFor="total-price"
                                >
                                    Quantity
                                </label>
                                <input className="input_field_stock_operation" />
                                <input className="input_field_stock_operation" />
                            </div>
                            <div className="input_field_stock">
                                <button className="button_field_stock_operation">
                                    Add
                                </button>
                                <button className="button_field_stock_operation">
                                    Damage
                                </button>
                                <button className="button_field_stock_operation">
                                    Utilized
                                </button>
                            </div>
                            <div className="input_field_stock">
                                <button className="button_VIEW_REPORT_field_stock_operation">
                                    View Report
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="container_due_payment_stock_operation">
                        <div className="container_payment_input_field_stock">
                            <button className="button_VIEW_ADD_Image_field_stock_operation">
                                View & Add Image
                            </button>

                            <button className="button_field_stock_operation_excel">
                                Excel
                            </button>
                        </div>
                        <div className="input_field_stock">
                            <label
                                className="label_field_stock_operation"
                                htmlFor="purchase-id"
                            >
                                Stock ID
                            </label>
                            <input className="input_field_stock_operation" />
                        </div>
                        <div className="input_field_stock">
                            <label
                                className="label_field_stock_operation"
                                htmlFor="invoice-no"
                            >
                                Product ID/Code
                            </label>
                            <input className="input_field_stock_operation" />
                        </div>
                        <div className="input_field_stock">
                            <label
                                className="label_field_stock_operation"
                                htmlFor="invoice-no"
                            >
                                Product Name
                            </label>
                            <input className="input_field_stock_operation" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StockOperation;
