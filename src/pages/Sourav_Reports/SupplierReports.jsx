import React from "react";
import "./supplier-reports.css";
import { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useLocation } from "react-router-dom";

const SupplierReports = () => {
    const location = useLocation();
    const [rows, setRows] = useState([]);
    const [dates, setDates] = useState([]);
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const [allInvoice, setAllInvoice] = useState([]);
    const [selectedInvoiceNo, setSelectedInvoiceNo] = useState([]);
    const [allSupplier, setAllSupplier] = useState([]);
    const [selectedSupplier, setSelectedSupplier] = useState([]);

    useEffect(() => {
        // const fetchData = async () => {
        //     try {
        //         const response_getAllSaleTable = await fetch(
        //             "http://194.233.87.22:5001/api/sale_table/getSaleTable"
        //         );

        //         const datas_getAllSaleTable =
        //             await response_getAllSaleTable.json();

        //         setRows(datas_getAllSaleTable);
        //     } catch (error) {
        //         console.log(error.message);
        //     }
        // };
        // fetchData();
    }, []);


        // 1st date search
        const handelClickFetchDate = () => {
          setIsLoaded(true);
          const fetchData = async () => {
              const response_getSupplierReportDateSearchTableAllData =
                  await fetch(
                      "http://194.233.87.22:5001/api/supplier/getSupplierByOnlyDate?date=" +
                          dates,
                          {
                              method: "POST",
      
                              headers: {
                                  "x-access-token":JSON.parse(
                                      localStorage.getItem("x-access-token")
                                  ),
                              },
                          }
                  );
              console.log(
                  "http://194.233.87.22:5001/api/supplier/getSupplierByOnlyDate?date="
              );
              const datas_getSupplierReportDateSearchTableAllData =
                  await response_getSupplierReportDateSearchTableAllData.json();
              console.log(datas_getSupplierReportDateSearchTableAllData);
              //   sleep(2000).then(() => {
              //     setIsLoaded(false);
              //   });
              setRows(datas_getSupplierReportDateSearchTableAllData);
              console.log(datas_getSupplierReportDateSearchTableAllData);
          };
  
          setIsLoaded(false);
          fetchData();
      };

      const handleDateChange = (event) => {
        setDates(event.target.value);
        console.log(event.target.value);
    };

    const handleClickSearchbyInvoiceNo = () => {
      setIsLoaded(true);
      const fetchData = async () => {
          // Error     const response_getSelectedInvoiceForSearch = await fetch('http://194.233.87.22:5001/api/customer/getSelectedDataOfCustomerByInvoice?challan_no=' + selectedInvoiceNo);
          const response_getSelectedInvoiceForSearch = await fetch(
              "http://194.233.87.22:5001/api/supplier/getSupplierByChallanNo?challan_no=" +
                  selectedInvoiceNo,
                  {
                      method: "POST",

                      headers: {
                          "x-access-token":JSON.parse(
                              localStorage.getItem("x-access-token")
                          ),
                      },
                  }
          );
          //console.log('link');
          const datas_getSelectedInvoiceForSearch =
              await response_getSelectedInvoiceForSearch.json();
          console.log(datas_getSelectedInvoiceForSearch);

          setRows(datas_getSelectedInvoiceForSearch);
          setIsLoaded(false);
      };
      fetchData();
  };

  const handleClickSearchbySupplier = () => {
    setIsLoaded(true);
    const fetchData = async () => {
        // Error     const response_getSelectedInvoiceForSearch = await fetch('http://194.233.87.22:5001/api/customer/getSelectedDataOfCustomerByInvoice?challan_no=' + selectedInvoiceNo);
        const response_getSelectedSupplierForSearch = await fetch(
            "http://194.233.87.22:5001/api/supplier/getSupplierByCompanyName?company_name=" +
                selectedSupplier,
                {
                    method: "POST",

                    headers: {
                        "x-access-token":JSON.parse(
                            localStorage.getItem("x-access-token")
                        ),
                    },
                }
        );
        //console.log('link');
        const datas_getSelectedSupplierForSearch =
            await response_getSelectedSupplierForSearch.json();
        console.log(datas_getSelectedSupplierForSearch);

        setRows(datas_getSelectedSupplierForSearch);
        setIsLoaded(false);
    };

    fetchData();
};

    // Date Form & To search
    const handelClickFetchDateFormAndToSearch = () => {
      setIsLoaded(true);
      const fetchData = async () => {
          
          const response_getProductCostDateSearchTableAllData = await fetch(
              "http://194.233.87.22:5001/api/supplier/getSupplierFromDateToDate?fromdate=" +
                  fromDate +
                  "&todate=" +
                  toDate,
                  {
                      method: "POST",

                      headers: {
                          "x-access-token":JSON.parse(
                              localStorage.getItem("x-access-token")
                          ),
                      },
                  }
          );
          const datas_getProductCostDateSearchTableAllData =
              await response_getProductCostDateSearchTableAllData.json();
          setRows(datas_getProductCostDateSearchTableAllData);
      };

      setIsLoaded(false);
      fetchData();
  };

    return (
        <div className="full_div_supplier_report">
            <div className="first_row_div_supplier_report">
                <div className="container_search_column1_supplier_report">
                    <div className="input_field_supplier">
                        <label
                            className="label_field_supplier_report"
                            for="supplier_report-date-search"
                        >
                            Date
                        </label>
                        <input
                            className="input_field_supplier_report"
                            type="date"
                            id="supplier-report-date-search"
                            value={dates}
                            onChange={handleDateChange}
                        />
                        <button
                            className="button_field_supplier_report"
                            type="submit"
                            onClick={handelClickFetchDate}
                        >
                            Search
                        </button>
                    </div>
                    <div className="input_field_supplier">
                        <label
                            className="label_field_supplier_report"
                            for="supplier-report-invoice-id-search"
                        >
                            Invoice
                        </label>
                        <input className="input_field_supplier_report"
                             onSelect={(event) =>
                              setSelectedInvoiceNo(event.target.value)
                          }
                          onChange={(event) =>
                              setSelectedInvoiceNo(event.target.value)
                          }
                          list={"select_invoice_no"}
                      />
                      <datalist id="select_invoice_no">
                          {allInvoice.map((allInvoice, index) => {
                              return (
                                  <option key={index}>{allInvoice}</option>
                              );
                          })}
                      </datalist> 
                        <button
                            className="button_field_supplier_report"
                            type="submit"
                            onClick={(event) =>
                              handleClickSearchbyInvoiceNo(event.target.value)
                          }
                        >
                            Search
                        </button>
                    </div>
                </div>
                <div className="container_search_column2_supplier_report">
                    <div className="input_field_supplier">
                        <label
                            className="label_field_supplier_report"
                            for="supplier-from-date-search"
                        >
                            From Date
                        </label>
                        <input
                            className="input_field_supplier_report"
                            type="date"
                            id="supplier-from-date-search"
                            onChange={(event) =>
                              setFromDate(event.target.value)
                          }
                        />
                    </div>
                    <div className="input_field_supplier">
                        <label
                            className="label_field_supplier_report"
                            for="supplier-from-date-search"
                        >
                            Supplier
                        </label>
                        <input
                            className="input_field_supplier_report"
                            id="supplier-search"
                            onSelect={(event) =>
                              setSelectedSupplier(event.target.value)
                          }
                          onChange={(event) =>
                              setSelectedSupplier(event.target.value)
                          }
                          list={"select_supplier"}
                      />
                      <datalist id="select_supplier">
                          {allSupplier.map((allSupplier, index) => {
                              return (
                                  <option key={index}>{allSupplier}</option>
                              );
                          })}
                      </datalist>
                        <button
                            className="button_field_supplier_report"
                            type="submit"
                            onClick={(event) =>
                              handleClickSearchbySupplier(event.target.value)
                          }
                        >
                            Search
                        </button>
                    </div>
                </div>
                <div className="container_search_column3_supplier_report">
                    <div className="input_field_supplier">
                        <label
                            className="label_field_supplier_report"
                            for="supplier-from-date-search"
                        >
                            To Date
                        </label>
                        <input
                            className="input_field_supplier_report"
                            type="date"
                            id="supplier-search"
                            onChange={(event) => setToDate(event.target.value)}
                        />
                        <button
                            className="button_field_supplier_report"
                            type="submit"
                            onClick={handelClickFetchDateFormAndToSearch}

                        >
                            Search
                        </button>
                    </div>
                    <div className="input_field_supplier">
                        <button
                            className="button_field_supplier_report btn"
                            type="submit"
                        >
                            Show All
                        </button>
                    </div>
                </div>
                <div className="container_search_column4_supplier_report">
                    <div className="input_field_supplier">
                        <button
                            className="button_field_supplier_report btn"
                            type="submit"
                        >
                            Excel
                        </button>
                    </div>
                </div>
            </div>
            <div className="second_row_div_supplier_report">
                <div className="table_div_supplier_report table_wrapper_supplier_report">
                {isLoaded ? (
                        <div className="rotating_lines_expense_report_page">
                            <RotatingLines
                                strokeColor="grey"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="50"
                                visible={true}
                            />
                        </div>
                    ) : (
                    <table border={3} cellSpacing={2} cellPadding={10}>
                        <tr>
                            <th>ID</th>
                            <th>Invoice</th>
                            <th>Supplier Name</th>
                            <th>Mobile</th>
                            <th>Address</th>
                            <th>Total</th>
                            <th>Paid</th>
                            <th>Due</th>
                            <th>Purchase Date</th>
                            <th>Entry Date</th>
                            <th>Entry By</th>
                        </tr>
                        <tbody>
                            {rows.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.challan_no}</td>
                                    <td>{item.company_name}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.address}</td>
                                    <td>{item.total}</td>
                                    <td>{item.paid}</td>
                                    <td>{item.due}</td>
                                    <td>{item.purchase_date}</td>
                                    <td>{item.entry_date_time}</td>
                                    <td>{item.entry_by}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    )}
                </div>
            </div>
            <div className="third_row_div_supplier_report">
                <div className="container_view_update_supplier_report">
                    <div className="container_view_supplier_report">
                        <div className="input_field_supplier">
                            <label
                                className="label_field_supplier_report"
                                htmlFor="total-sale"
                            >
                                Total
                            </label>
                            <input className="input_field_supplier_report" />
                        </div>
                        <div className="input_field_supplier">
                            <label
                                className="label_field_supplier_report"
                                htmlFor="total-paid"
                            >
                                Paid
                            </label>
                            <input className="input_field_supplier_report" />
                        </div>
                        <div className="input_field_supplier">
                            <label
                                className="label_field_supplier_report"
                                htmlFor="total-due"
                            >
                                Due
                            </label>
                            <input className="input_field_supplier_report" />
                        </div>
                    </div>

                    <div className="container_update_supplier_report">
                        <div className="custom_update_supplier_report">
                            <div className="container_update_column1_supplier_report">
                                <div className="input_field_supplier">
                                    <label
                                        className="label_field_supplier_report"
                                        htmlFor="purchase-id"
                                    >
                                        Purchase ID
                                    </label>
                                    <input className="input_field_supplier_report" />
                                </div>
                                <div className="input_field_supplier">
                                    <label
                                        className="label_field_supplier_report"
                                        htmlFor="invoice-no"
                                    >
                                        Invoice No.*
                                    </label>
                                    <input className="input_field_supplier_report" />
                                </div>
                                <div className="input_field_supplier">
                                    <select className="select_field_supplier_report"></select>
                                    <button className="button_field_supplier_report">
                                        View Invoice
                                    </button>
                                </div>
                                <div className="input_field_supplier">
                                    <label
                                        className="label_field_supplier_report"
                                        htmlFor="entry-date"
                                    >
                                        Entry Date
                                    </label>
                                    <input
                                        className="input_field_supplier_report"
                                        type="date"
                                    />
                                </div>
                            </div>
                            <div className="container_update_column2_supplier_report">
                                <div className="input_field_supplier">
                                    <label
                                        className="label_field_supplier_report"
                                        htmlFor="supplier-name"
                                    >
                                        Supplier Name*
                                    </label>
                                    <input className="input_field_supplier_report" />
                                </div>
                                <div className="input_field_supplier">
                                    <label
                                        className="label_field_supplier_report"
                                        htmlFor="mobile-number"
                                    >
                                        Mobile*
                                    </label>
                                    <input className="input_field_supplier_report" />
                                </div>
                                <div className="input_field_supplier">
                                    <label
                                        className="label_field_supplier_report"
                                        htmlFor="address"
                                    >
                                        Address*
                                    </label>
                                    <input className="input_field_supplier_report" />
                                </div>
                                <div className="input_field_supplier">
                                    <label
                                        className="label_field_supplier_report"
                                        htmlFor="purchase Date"
                                    >
                                        *Purchase Date
                                    </label>
                                    <input
                                        className="input_field_supplier_report"
                                        type="date"
                                    />
                                </div>
                            </div>
                            <div className="container_update_column3_supplier_report">
                                <div className="input_field_supplier">
                                    <label
                                        className="label_field_supplier_report"
                                        htmlFor="total-price"
                                    >
                                        Total Price*
                                    </label>
                                    <input className="input_field_supplier_report" />
                                </div>
                                <div className="input_field_supplier">
                                    <label
                                        className="label_field_supplier_report"
                                        htmlFor="total-paid"
                                    >
                                        Paid*
                                    </label>
                                    <input className="input_field_supplier_report" />
                                </div>
                                <div className="input_field_supplier">
                                    <label
                                        className="label_field_supplier_report"
                                        htmlFor="total-due"
                                    >
                                        Due*
                                    </label>
                                    <input className="input_field_supplier_report" />
                                </div>
                                <div className="input_field_supplier">
                                    <button className="button_field_supplier_report">
                                        Update
                                    </button>
                                    <button className="button_field_supplier_report">
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="container_due_payment_supplier_report">
                            <div className="input_field_supplier">
                                <label
                                    className="label_field_supplier_report"
                                    htmlFor="total-pament"
                                >
                                    Payment Type*
                                </label>
                                <select className="select_field_supplier_report"></select>
                            </div>
                            <div className="input_field_supplier">
                                <label
                                    className="label_field_supplier_report"
                                    htmlFor="total-due"
                                >
                                    TK.*
                                </label>
                                <input className="input_field_supplier_report" />
                            </div>
                            <div className="input_field_supplier">
                                <button className="button_field_supplier_report">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupplierReports;
