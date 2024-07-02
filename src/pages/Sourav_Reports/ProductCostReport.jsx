import React from "react";
import "./product-cost-report.css";
import { useState, useEffect } from "react";
import ExportExcel from "../../components/ExportExcel";
import { RotatingLines } from "react-loader-spinner";
import { useLocation } from "react-router-dom";

const ProductCostReport = () => {
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
    const [allProductName, setAllProductName] = useState([]);
    const [selectedProductName, setSelectedProductName] = useState([]);
    const [selectedProductID, setSelectedProductID] = useState([]);
    const [selectedProductIDSearch, setSelectedProductIDSearch] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [invoiceData, setInvoiceDate] = useState([]);
    const [invoiceSearch, setInvoiceSearch] = useState([]);
    const [supplierSearch, setSupplierSearch] = useState([]);
    const [supplierData, setSupplierData] = useState([]);
    const [productCodeId, setProductCodeId] = useState([]);
    const [productCodeIdData, setProductCodeIdData] = useState([]);
    const [allProduct, setAllProduct] = useState([]);
    const [selectedProductTypeNo, setSelectedProductTypeNo] = useState([]);
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  



    useEffect(() => {
        localStorage.setItem(
            "x-access-token",
            JSON.stringify(location.state.accessToken)
        );
        setIsLoaded(true);
        const fetchData = async () => {

            try {
                const response_getAllSaleTable = await fetch(
                    "http://194.233.87.22:5001/api/net_purchase_price/getNetPurchasePrice",
                    {
                        method: "POST",

                        headers: {
                            "x-access-token": JSON.parse(
                                localStorage.getItem("x-access-token")
                            ),
                        },
                    }
                );

                const datas_getAllSaleTable =
                    await response_getAllSaleTable.json();
                console.log("Data fetched:", datas_getAllSaleTable);

                setRows(datas_getAllSaleTable);
                setIsLoaded(false);
                //Product Name autoload start
            const response_getAllProductName = await fetch(
                "http://194.233.87.22:5001/api/stock/getAllDistinctProduct",
                {
                    method: "POST",

                    headers: {
                        "x-access-token": JSON.parse(
                            localStorage.getItem("x-access-token")
                        ),
                    },
                }
            );
            const datas_getAllProductName =
                await response_getAllProductName.json();
            console.log(datas_getAllProductName);
            const product_getAllProductName = datas_getAllProductName.map(
                ({ product_name: actualValue }) => actualValue
            );
            setAllProductName([...new Set(product_getAllProductName)]);
            console.log(product_getAllProductName);
            //Product Name autoload end
            } catch (error) {
                console.log(error.message);
            }
        }

       
        
        fetchData();
    }, []);


      // Form Pick up to useEffect
  const fetchDataTableData = async () => {
    try {
      const response_getAllSaleTable = await fetch(
        "http://194.233.87.22:5001/api/net_purchase_price/getNetPurchasePrice",
        {
          method: "POST",
          headers: {
            "x-access-token": JSON.parse(
              localStorage.getItem("x-access-token")
            ),
          },
        }
      );

      const datas_getAllSaleTable = await response_getAllSaleTable.json();

      setRows(datas_getAllSaleTable);
      setIsLoading(false);
      // Product data with Type or ID
      const response_getAllProducts = await fetch(
        "http://194.233.87.22:5001/api/stock/getAllDistinctProduct",
        {
          method: "POST",
          headers: {
            "x-access-token": JSON.parse(
              localStorage.getItem("x-access-token")
            ),
          },
        }
      );

      const datas_getAllProducts = await response_getAllProducts.json();
      console.log(datas_getAllProducts);
      const product_getAllProducts = datas_getAllProducts.map(
        ({ product: actualValue }) => actualValue
      );
      setAllProduct([...new Set(product_getAllProducts)]);

      console.log(product_getAllProducts);
    } catch (error) {
      console.log(error.message);
    }
  };




    useEffect(() => {
        localStorage.setItem(
          "x-access-token",
          JSON.stringify(location.state.accessToken)
        );
        setIsLoading(true);
    
        // Call the function
        fetchDataTableData();
      }, []);

    //Show All Button Search
    const handleClickSearchShowAll = () => {
        setIsLoaded(true);
        const fetchData = async () => {
            const response_getExpenseTableAllData = await fetch(
                "http://194.233.87.22:5001/api/net_purchase_price/getNetPurchasePrice",
                {
                    method: "POST",

                    headers: {
                        "x-access-token": JSON.parse(
                            localStorage.getItem("x-access-token")
                        ),
                    },
                }
            );
            const datas_getExpenseTableAllData =
                await response_getExpenseTableAllData.json();
            setRows(datas_getExpenseTableAllData);
            setIsLoaded(false);
        };
        fetchData();
    };

    // const handleClickSearchbyInvoiceNo = () => {
    //     setIsLoaded(true);
    //     const fetchData = async () => {
    //         // Error     const response_getSelectedInvoiceForSearch = await fetch('http://194.233.87.22:5001/api/customer/getSelectedDataOfCustomerByInvoice?challan_no=' + selectedInvoiceNo);
    //         const response_getSelectedInvoiceForSearch = await fetch(
    //             "http://194.233.87.22:5001/api/net_purchase_price/getNetPurchasePriceByInvoice?invoice=" +
    //                 selectedInvoiceNo,
    //             {
    //                 method: "POST",

    //                 headers: {
    //                     "x-access-token": JSON.parse(
    //                         localStorage.getItem("x-access-token")
    //                     ),
    //                 },
    //             }
    //         );
    //         //console.log('link');
    //         const datas_getSelectedInvoiceForSearch =
    //             await response_getSelectedInvoiceForSearch.json();
    //         console.log(datas_getSelectedInvoiceForSearch);

    //         setRows(datas_getSelectedInvoiceForSearch);
    //         setIsLoaded(false);
    //     };

    //     // Call the function
    //     fetchData();
    // };
      // Invoice Search
  const handleClickSearchbyInvoiceNo = () => {
    setIsLoading(true);
    const fetchData = async () => {
      const response_getPurcheseInvoiceSearchTableAllData = await fetch(
        "http://194.233.87.22:5001/api/net_purchase_price/getNetPurchasePriceByInvoice?invoice=" +
          invoiceSearch,
        {
          method: "POST",
          headers: {
            "x-access-token": JSON.parse(
              localStorage.getItem("x-access-token")
            ),
          },
        }
      );

      const datas_getPurcheseInvoiceSearchTableAllData =
        await response_getPurcheseInvoiceSearchTableAllData.json();
      console.log(datas_getPurcheseInvoiceSearchTableAllData);
      sleep(2000).then(() => {
        setIsLoading(false);
      });
      setRows(datas_getPurcheseInvoiceSearchTableAllData);
      console.log(datas_getPurcheseInvoiceSearchTableAllData);
      // show all
    };

    // Call the function
    fetchData();
  };

    const handleClickSearchbySupplier = () => {
        setIsLoaded(true);
        const fetchData = async () => {
            // Error     const response_getSelectedInvoiceForSearch = await fetch('http://194.233.87.22:5001/api/customer/getSelectedDataOfCustomerByInvoice?challan_no=' + selectedInvoiceNo);
            const response_getSelectedSupplierForSearch = await fetch(
                "http://194.233.87.22:5001/api/net_purchase_price/getNetPurchasePriceBySupplierName?supplier_name=" +
                    selectedSupplier,
                {
                    method: "POST",

                    headers: {
                        "x-access-token": JSON.parse(
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

    // 1st date search
    const handelClickFetchDate = () => {
        setIsLoaded(true);
        const fetchData = async () => {
            const response_getProductCostReportDateSearchTableAllData =
                await fetch(
                    "http://194.233.87.22:5001/api/net_purchase_price/getNetPurchasePriceByOnlyDate?date=" +
                        dates,
                    {
                        method: "POST",

                        headers: {
                            "x-access-token": JSON.parse(
                                localStorage.getItem("x-access-token")
                            ),
                        },
                    }
                );
            console.log(
                "http://194.233.87.22:5001/api/net_purchase_price/getNetPurchasePriceByOnlyDate?date="
            );
            const datas_getProductCostReportDateSearchTableAllData =
                await response_getProductCostReportDateSearchTableAllData.json();
            console.log(datas_getProductCostReportDateSearchTableAllData);
            //   sleep(2000).then(() => {
            //     setIsLoaded(false);
            //   });
            setRows(datas_getProductCostReportDateSearchTableAllData);
            console.log(datas_getProductCostReportDateSearchTableAllData);

            setIsLoaded(false);
        };

        fetchData();
    };

    // Date Form & To search
    const handelClickFetchDateFormAndToSearch = () => {
        setIsLoaded(true);
        const fetchData = async () => {
            const response_getProductCostDateSearchTableAllData = await fetch(
                "http://194.233.87.22:5001/api/net_purchase_price/getNetPurchasePriceByFromDateToDate?fromdate=" +
                    fromDate +
                    "&todate=" +
                    toDate,
                {
                    method: "POST",

                    headers: {
                        "x-access-token": JSON.parse(
                            localStorage.getItem("x-access-token")
                        ),
                    },
                }
            );
            const datas_getProductCostDateSearchTableAllData =
                await response_getProductCostDateSearchTableAllData.json();
            setRows(datas_getProductCostDateSearchTableAllData);
            setIsLoaded(false);
        };

        fetchData();
    };

    const handleDateChange = (event) => {
        setDates(event.target.value);
        console.log(event.target.value);
    };

    // handleKeyDownProductName

    const handleKeyDownProductName = (event) => {
        setSelectedProductName(event.target.value);

        const fetchData = async () => {
            const response_getSelectedProductName = await fetch(
                "http://194.233.87.22:5001/api/net_purchase_price/getDataByNameAndGroupBy?product_name=" +
                    selectedProductName,
                {
                    method: "POST",

                    headers: {
                        "x-access-token": JSON.parse(
                            localStorage.getItem("x-access-token")
                        ),
                    },
                }
            );
            const datas_getSelectedProductName =
                await response_getSelectedProductName.json();
            const product_getSelectedProductID =
                datas_getSelectedProductName.map(
                    ({ model: actualValue }) => actualValue
                );

            setSelectedProductID([...new Set(product_getSelectedProductID)]);
        };

        // Call the function
        fetchData();
    };

    const handleClickSearchbyProductNameID = () => {
        setIsLoaded(true);
        const fetchData = async () => {
           
            const response_getSelectedProductbyNameID = await fetch(
                "http://194.233.87.22:5001/api/net_purchase_price/getDataByNameAndModelAndGroupBy?product_name=" +
                    selectedProductName +
                    "&model" +
                    selectedProductIDSearch,
                    {
                        method: "POST",

                        headers: {
                            "x-access-token":JSON.parse(
                                localStorage.getItem("x-access-token")
                            ),
                        },
                    }
            );
            const datas_getSelectedProductbyNameID =
                await response_getSelectedProductbyNameID.json();

            setRows(datas_getSelectedProductbyNameID);
            setIsLoaded(false);
        };

        // Call the function
        fetchData();
    };

    return (
        <div className="full_div_product_cost_report">
            <div className="first_row_div_product_cost_report">
                <div className="container_search_column1_product_cost_report">
                    <div className="input-feild_product_cost_report">
                        <label className="label_product_cost_report">
                            Date
                        </label>
                        <input
                            className="input_product_cost_report"
                            type="date"
                            value={dates}
                            onChange={handleDateChange}
                        />
                        <button
                            className="button_product_cost_report"
                            onClick={handelClickFetchDate}
                            type="submit"
                        >
                            Search
                        </button>
                    </div>
                    <div className="input-feild_product_cost_report">
                        <label className="label_product_cost_report">
                            Invoice
                        </label>
                        <input
                            className="input_product_cost_report"
                            id="search_by_invoice"
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
                                    <option key={index}>{allInvoice.invoice}</option>
                                );
                            })}
                        </datalist>
                        <button
                            className="button_product_cost_report"
                            type="submit"
                            onClick={(event) =>
                                handleClickSearchbyInvoiceNo(event.target.value)
                            }
                        >
                            Search
                        </button>
                    </div>
                    <div className="input-feild_product_cost_report">
                        <label className="label_product_cost_report">
                            Supplier
                        </label>
                        <input
                            className="input_product_cost_report"
                            id="search_by_supplier"
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
                            className="button_product_cost_report"
                            type="submit"
                            onClick={(event) =>
                                handleClickSearchbySupplier(event.target.value)
                            }
                        >
                            Search
                        </button>
                    </div>
                </div>
                <div className="container_search_column2_product_cost_report">
                    <div className="input-feild_product_cost_report">
                        <label className="label_product_cost_report">
                            From Date
                        </label>
                        <input
                            className="input_product_cost_report"
                            type="date"
                            onChange={(event) =>
                                setFromDate(event.target.value)
                            }
                        />
                    </div>
                    <div className="input-feild_product_cost_report">
                        <label className="label_product_cost_report">
                            Product Name
                        </label>
                        <input
                            className="input_product_cost_report"
                            list="selectProductName"
                            onSelect={handleKeyDownProductName}
                            onChange={(event) =>
                                setSelectedProductName(event.target.value)
                            }
                        />
                        <datalist id="selectProductName">
                            {allProductName.map((allProductName, index) => {
                                return <option key={index}>{allProductName}</option>
                                
                            })}
                        </datalist>
                    </div>
                </div>
                <div className="container_search_column3_product_cost_report">
                    <div className="input-feild">
                        <label className="label_product_cost_report">
                            To Date
                        </label>
                        <input
                            className="input_product_cost_report"
                            type="date"
                            onChange={(event) => setToDate(event.target.value)}
                        />
                        <button
                            className="button_product_cost_report"
                            type="submit"
                            onClick={handelClickFetchDateFormAndToSearch}
                        >
                            Search
                        </button>
                    </div>
                    <div className="input-feild_product_cost_report">
                        <label className="label_product_cost_report">
                            Type/No
                        </label>
                        <select 
                            className="select_product_cost_report"
                            onSelect={(event) =>
                                setSelectedProductIDSearch(
                                    event.target.value
                                )
                            }
                            // onChange={(event) =>
                            //     setSelectedProductIDSearch(
                            //         event.target.value
                            //     )
                            // }
                        >
                            {selectedProductID.map(
                                (selectedProductID, index) => {
                                    return <option key={index}>{selectedProductID}</option>
                                   
                                }
                            )}
                        </select>
                        <button
                            className="button_product_cost_report"
                            type="submit"
                            onClick={handleClickSearchbyProductNameID}
                        >
                            Search
                        </button>
                    </div>
                </div>
                <div className="container_search_column4_product_cost_report">
                    <div className="input-feild_product_cost_report">
                        <button
                            className="button_product_cost_report btn"
                            type="submit"
                            onClick={handleClickSearchShowAll}
                        >
                            Show All
                        </button>
                    </div>
                </div>

                <div className="container_search_column5_product_cost_report">
                    <div className="input-feild_product_cost_report">
                        <div>
                            <ExportExcel
                                excelData={rows}
                                fileName={"Excel Export"}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="second_row_div_product_cost_report">
                <div className="table_div_product_cost_report table_wrapper_product_cost_report">
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
                                <th>SL.</th>
                                <th>Purchase ID</th>
                                <th>Invoice</th>
                                <th>Supplier Name</th>
                                <th>Product Name</th>
                                <th>Type/No.</th>
                                <th>Price</th>
                                <th>LC Cost</th>
                                <th>Other Cost</th>
                                <th>Net Price</th>
                                <th>Date</th>
                            </tr>
                            <tbody>
                                {rows.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.purchase_id}</td>
                                        <td>{item.invoice}</td>
                                        <td>{item.supplier_name}</td>
                                        <td>{item.product_name}</td>
                                        <td>{item.model}</td>
                                        <td>{item.price}</td>
                                        <td>{item.LC_cost}</td>
                                        <td>{item.other_cost}</td>
                                        <td>{item.net_price}</td>
                                        <td>{item.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCostReport;
