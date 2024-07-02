import React from "react";
import "./services.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Checkbox } from "@mui/material";

const Services = () => {
    const location = useLocation();
    const [productCodeInputValue, setProductCodeInputValue] = useState(""); // for the input value
    const [productCodeList, setProductCodeList] = useState([]); // for the

    const handleProductCode = () => {
        const fetchData = async () => {
            try {
                const response_getProductCode = await fetch(
                    "http://194.233.87.22:5001/api/stock/getDistinctProductCode",
                    {
                        method: "POST",

                        headers: {
                            "x-access-token":JSON.parse(
                                localStorage.getItem("x-access-token")
                            ),
                        },
                    }
                );

                if (!response_getProductCode.ok) {
                    throw new Error("Failed to fetch product codes");
                }

                const datas_getProductCode =
                    await response_getProductCode.json();

                // Update the product code list state with the fetched data
                setProductCodeList(datas_getProductCode);
            } catch (error) {
                console.error("Error fetching product codes:", error);
            }
        };

        fetchData();
    };

    return (
        <div className="full_div_service">
            <div className="first_row_div_service">
                <div className="add_to_cart_service">
                    <div>
                        <div className="input_field_add_to_cart_service">
                            <label className="label_add_to_cart_service">
                                *Product Code
                            </label>
                            <input
                                className="input_add_to_cart_service"
                                value={productCodeInputValue}
                                onChange={(event) => {
                                    setProductCodeInputValue(
                                        event.target.value
                                    );
                                }}
                                onClick={handleProductCode}
                                list="options"
                                autoComplete="off"
                            />
                            <datalist id="options">
                                {productCodeList.map((product, index) => (
                                    <option
                                        key={index}
                                        value={product.product_code}
                                    />
                                ))}
                            </datalist>
                        </div>
                        <div className="input_field_add_to_cart_service">
                            <label className="label_add_to_cart_service">
                                *Product Name
                            </label>
                            <input className="input_add_to_cart_service"></input>
                        </div>
                        <div className="input_field_add_to_cart_service">
                            <label className="label_add_to_cart_service">
                                *Quantity
                            </label>
                            <input className="input_add_to_cart_service"></input>
                        </div>
                    </div>
                    <div className="add_cart_button_div">
                        <button className="button_addCart">+</button>
                        <h5 className="header_button">Add to Cart</h5>
                    </div>
                </div>
                <div className="customer_information_service">
                    <div className="customer_information_service_div_1">
                        <h4 className="header_customer_information_service">
                            Customer Information{" "}
                        </h4>
                        <div className="permanent_customer_with_check_box">
                            <h6 className="header_customer_information_service">
                                Permanent Customer{" "}
                            </h6>
                            <Checkbox className="checkB0x_permanentCustomer"></Checkbox>
                        </div>
                        <div className="input_customer_information">
                            <label className="label_customer">*Name</label>
                            <input className="input_customer"></input>
                        </div>
                        <div className="input_customer_information">
                            <div className="input_customer_div_1">
                                <label className="label_customer_id">*ID</label>
                                <select className="select_customer"></select>
                                <button className="button_permanent_customer">
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="input_customer_information">
                            <label className="label_customer">*Mobile</label>
                            <select className="select_customer_1"></select>
                        </div>
                        <div className="input_customer_information">
                            <label className="label_customer">*Address</label>
                            <select className="select_customer_1"></select>
                        </div>
                    </div>
                    <div className="customer_information_service_div_2">
                        <div className="input_customer_information_2">
                            <label className="label_customer_2">Total:</label>
                            <input className="input_customer_2"></input>
                        </div>
                        <div className="input_customer_information">
                            <label className="label_customer_2">Paid:</label>
                            <input className="input_customer_2"></input>
                        </div>
                        <div className="input_customer_information">
                            <label className="label_customer_2">Due:</label>
                            <input className="input_customer_2"></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second_row_div_service">
                <div className="row_2_column_1_service">
                    <div className="table_wrapper_service">
                        <table border={3} cellSpacing={2} cellPadding={10}>
                            <tr>
                                <th>SL</th>
                                <th>Product Code</th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="row_2_column_2_service">
                    <h5 className="header_service_summary">Service Summary</h5>
                    <div className="service_summary_grid">
                        <label className="label_service_summary">
                            *Service ID
                        </label>
                        <input className="input_service_summary"></input>
                    </div>
                    <div className="service_summary_grid">
                        <label className="label_service_summary">
                            Service Devices Name
                        </label>
                        <input className="input_service_summary"></input>
                    </div>
                    <div className="service_summary_grid">
                        <label className="label_service_summary_problem">
                            Problem
                        </label>
                        <textarea cols="54" rows="5"></textarea>
                    </div>
                    <div className="service_summary_grid">
                        <label className="label_service_summary">
                            *Service Charge
                        </label>
                        <input className="input_service_summary_small"></input>
                    </div>
                    <div className="service_summary_grid">
                        <label className="label_service_summary">*Paid</label>
                        <input className="input_service_summary_small"></input>
                    </div>
                    <div className="service_summary_grid">
                        <label className="label_service_summary">*Due</label>
                        <input
                            className="input_service_summary_small"
                            type="date"
                        ></input>
                    </div>
                    <div className="service_summary_grid">
                        <label className="label_service_summary">
                            *Product Name
                        </label>
                        <input
                            className="input_service_summary_small"
                            type="date"
                        ></input>
                    </div>
                    <div className="again_new_div_summary_service">
                        <div className="approve_summary_service_button">
                            <button className="button_approve_entry">
                                {" "}
                                Approve Entry
                            </button>{" "}
                        </div>
                        <div className="reset_summary_service_button">
                            <button className="button_reset"> Reset </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
