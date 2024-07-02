import React from "react";
import "./expense-report.css";
import { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useLocation } from "react-router-dom";

const ExpenseReport = () => {
        const location = useLocation();
    const [rows, setRows] = useState([]);
    const [types, setTypes] = useState([]);
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [dates, setDates] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);

    const [id, setId] = useState([]);
    const [type, setType] = useState([]);
    const [name, setName] = useState([]);
    const [amount, setAmount] = useState([]);
    const [paid, setPaid] = useState([]);
    const [due, setDue] = useState([]);
    const [date, setDate] = useState([]);

    useEffect(() => {
        setIsLoaded(true);
        const fetchData = async () => {
            const response_getAllExpenseTable = await fetch(
                "http://194.233.87.22:5001/api/expense_report/getExpenseReport",
                {
                    method: "POST",

                    headers: {
                        "x-access-token":JSON.parse(
                            localStorage.getItem("x-access-token")
                        ),
                    },
                }
            
            );
            const datas_getAllExpenseTable =
                await response_getAllExpenseTable.json();
            setRows(datas_getAllExpenseTable);
        };
        setIsLoaded(false);
        fetchData();
    }, []);

    const handleType = () => {
        const fetchData = async () => {
            const response_getSelectedType = await fetch(
                "http://194.233.87.22:5001/api/expense_report/getDistinctTypeFromExpenseReport",
                {
                    method: "POST",

                    headers: {
                        "x-access-token":JSON.parse(
                            localStorage.getItem("x-access-token")
                        ),
                    },
                }
            );
            console.log("link");
            const datas_getSelectedType = await response_getSelectedType.json();

            console.log(datas_getSelectedType);

            setRows(datas_getSelectedType);
        };

        fetchData();
    };

    const handleTypeSearch = () => {
        const fetchData = async () => {
            const response_getExpenseTypeSearchTableAllData = await fetch(
                "http://194.233.87.22:5001/api/expense_report/getExpenseReportByType?type=" +
                    types,
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
                "http://194.233.87.22:5001/api/cash_book/getCashBookByFromDateToDate?fromdate="
            );
            const datas_getExpenseTypeSearchTableAllData =
                await response_getExpenseTypeSearchTableAllData.json();
            console.log(datas_getExpenseTypeSearchTableAllData);
            // sleep(2000).then(() => {
            //   setIsLoading(false);
            // });
            setRows(datas_getExpenseTypeSearchTableAllData);
            console.log(datas_getExpenseTypeSearchTableAllData);
        };

        // Call the function
        fetchData();
    };

    // Type, Form & To date search
    const handelClickFetchTypeDateFormAndTo = () => {
        const fetchData = async () => {
            const response_getBankBalanceDateSearchTableAllData = await fetch(
                "http://194.233.87.22:5001/api/expense_report/getExpenseReportByDateToDateAndType?fromdate=" +
                    fromDate +
                    "&todate=" +
                    toDate +
                    "&type=" +
                    types,
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
                "http://194.233.87.22:5001/api/cash_book/getBankBalanceByFromDateToDate?fromdate=2019-04-15&todate=2019-04-17"
            );
            const datas_getBankBalanceDateSearchTableAllData =
                await response_getBankBalanceDateSearchTableAllData.json();
            console.log(datas_getBankBalanceDateSearchTableAllData);
            // sleep(2000).then(() => {
            //   setIsLoading(false);
            // });
            setRows(datas_getBankBalanceDateSearchTableAllData);
            console.log(datas_getBankBalanceDateSearchTableAllData);
        };

        // Call the function
        fetchData();
    };

    // Date Form & To search
    const handelClickFetchDateFormAndToSearch = () => {
        const fetchData = async () => {
            const response_getCashBookDateSearchTableAllData = await fetch(
                "http://194.233.87.22:5001/api/expense_report/getExpenseReportByDateToDate?fromdate=" +
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
            const datas_getCashBookDateSearchTableAllData =
                await response_getCashBookDateSearchTableAllData.json();
            setRows(datas_getCashBookDateSearchTableAllData);
        };
        fetchData();
    };

    //Show All Button Search
    const handleClickSearchShowAll = () => {
        setIsLoaded(true);
        const fetchData = async () => {
            const response_getExpenseTableAllData = await fetch(
                "http://194.233.87.22:5001/api/expense_report/getExpenseReport",
                {
                    method: "POST",

                    headers: {
                        "x-access-token":JSON.parse(
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

    // 1st date search
    const handelClickFetchDate = () => {
        // setIsLoaded(true);
        const fetchData = async () => {
            const response_getExpenseDateSearchTableAllData = await fetch(
                "http://194.233.87.22:5001/api/expense_report/getExpenseReportByOnlyDate?date=" +
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
                "http://194.233.87.22:5001/api/cash_book/getCashBookByOnlyDate?date=${date}"
            );
            const datas_getExpenseDateSearchTableAllData =
                await response_getExpenseDateSearchTableAllData.json();
            console.log(datas_getExpenseDateSearchTableAllData);
            //   sleep(2000).then(() => {
            //     setIsLoaded(false);
            //   });
            setRows(datas_getExpenseDateSearchTableAllData);
            console.log(datas_getExpenseDateSearchTableAllData);
        };

        // Call the function
        fetchData();
    };

    const handleDateChange = (event) => {
        setDates(event.target.value);
        console.log(event.target.value);
    };

    const handleFormDateChange = (event) => {
        setFromDate(event.target.value);
        console.log(event.target.value);
    };
    const handleToDateChange = (event) => {
        setToDate(event.target.value);
        console.log(event.target.value);
    };

    const handleClickTable = (item) => {
        setId(item.id);
        setType(item.type);
        setName(item.name);
        setAmount(item.amount);
        setPaid(item.paid);
        setDue(item.due);
        setDate(item.date);
    };

    const handleUpdate = async () => {
        try {
            console.log(id, type, name, amount, paid, due, date);
            await fetch(
                "http://194.233.87.22:5001/api/expense_report/updateExpenseReportById?id=" +
                    id +
                    "&type=" +
                    type +
                    "&name=" +
                    name +
                    "&amount=" +
                    amount +
                    "&paid=" +
                    paid +
                    "&due=" +
                    due +
                    "&date=" +
                    date,
                {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json",
                    },
                }
            );

            console.log("Data saved successfully");
        } catch (error) {
            console.error("Error saving data:", error);
        }
    };

    return (
        <div className="full_div_expense_report">
            <div className="first_row_div_expense_report">
                <div className="container_search_column1_expense_report">
                    <div className="input-field_expense_report">
                        <label className="label_field_expense_report">
                            *Type
                        </label>
                        <select
                            className="select_field_expense_report"
                            onClick={handleType}
                            onChange={(event) => setTypes(event.target.value)}
                        >
                            {rows.map((item) => (
                                <option key={item.id}>{item.type}</option>
                            ))}
                        </select>
                        <button
                            className="button_field_expense_report"
                            type="submit"
                            onClick={handleTypeSearch}
                        >
                            Search
                        </button>
                    </div>
                    <div className="two_way_date_expense_report_search">
                        <div className="two_date_search">
                            <div className="input-field_expense_report">
                                <label className="label_field_expense_report">
                                    Date Form
                                </label>
                                <input
                                    className="input_field_for_expense_report"
                                    type="date"
                                    onChange={(event) =>
                                        setFromDate(event.target.value)
                                    }
                                />
                            </div>
                            <div className="input-field_expense_report">
                                <label className="label_field_expense_report">
                                    To
                                </label>
                                <input
                                    className="input_field_for_expense_report"
                                    type="date"
                                    onChange={(event) =>
                                        setToDate(event.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <button
                            className="button_field_expense_report"
                            type="submit"
                            onClick={handelClickFetchTypeDateFormAndTo}
                        >
                            Type & Date Search
                        </button>
                    </div>
                </div>
                <div className="container_search_column2_expense_report">
                    <div className="two_date_search">
                        <div className="input-field_expense_report">
                            <label className="label_field_expense_report">
                                From Date
                            </label>
                            <input
                                className="input_field_for_expense_report"
                                type="date"
                                onChange={handleFormDateChange}
                            />
                        </div>
                        <div className="input-field_expense_report">
                            <label className="label_field_expense_report">
                                To
                            </label>
                            <input
                                className="input_field_for_expense_report"
                                type="date"
                                onChange={handleToDateChange}
                            />
                        </div>
                    </div>
                    <button
                        className="button_field_expense_report"
                        type="submit"
                        onClick={handelClickFetchDateFormAndToSearch}
                    >
                        Search
                    </button>
                </div>
                <div className="container_search_column3_expense_report">
                    <div className="input-field_expense_report">
                        <label className="label_field_expense_report">
                            Date
                        </label>
                        <input
                            className="input_field_for_expense_report"
                            type="date"
                            value={dates}
                            onChange={handleDateChange}
                        />
                        <button
                            className="button_field_expense_report"
                            // type="submit"
                            onClick={handelClickFetchDate}
                        >
                            Search
                        </button>
                    </div>
                </div>
                <div className="container_search_column4_expense_report">
                    <div className="input-field_expense_report">
                        <button
                            className="button_field_expense_report"
                            type="submit"
                            onClick={handleClickSearchShowAll}
                        >
                            Show All
                        </button>
                    </div>
                </div>
                <div className="container_search_column5_expense_report">
                    <div className="input-field_expense_report">
                        <button
                            className="button_field_expense_report"
                            type="submit"
                        >
                            Excel
                        </button>
                    </div>
                </div>
            </div>
            <div className="second_row_div_expense_report">
                <div className="table_wrapper_expense_report table_div_expense_report">
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
                                <th>Serial</th>
                                <th>Type</th>
                                <th>Comment</th>
                                <th>Cost</th>
                                <th>Paid</th>
                                <th>Due</th>
                                <th>Date</th>
                            </tr>
                            <tbody>
                                {rows.map((item) => (
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
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
            <div className="third_row_div_expense_report">
                <div className="container_view_update_expense_report">
                    <div className="container_view_expense_report">
                        <div className="input-field_expense_report">
                            <label className="label_field_expense_report">
                                Total Price
                            </label>
                            <input className="input_field_for_expense_report" />
                        </div>
                        <div className="input-field_expense_report">
                            <label className="label_field_expense_report">
                                Paid
                            </label>
                            <input className="input_field_for_expense_report" />
                        </div>
                        <div className="input-field_expense_report">
                            <label className="label_field_expense_report">
                                Due
                            </label>
                            <input className="input_field_for_expense_report" />
                        </div>
                    </div>
                    <h4>Update Opration</h4>
                    <div className="container_update_expense_report">
                        <div className="container-update-column1_expense_report">
                            <div className="input-field_expense_report">
                                <label className="label_field_expense_report">
                                    *Type
                                </label>
                                <input
                                    className="input_field_for_expense_report"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                />
                            </div>
                            <div className="input-field_expense_report">
                                <label className="label_field_expense_report">
                                    Expense Name
                                </label>
                                <input
                                    className="input_field_for_expense_report"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} 

                                />
                            </div>
                        </div>
                        <div className="container-update-column2_expense_report">
                            <div className="input-field_expense_report">
                                <label className="label_field_expense_report">
                                    Total Cost
                                </label>
                                <input
                                    className="input_field_for_expense_report"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)} 

                                />
                            </div>
                            <div className="input-field_expense_report">
                                <label className="label_field_expense_report">
                                    *Date
                                </label>
                                <input
                                    className="input_field_for_expense_report"
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)} 
                                />
                            </div>
                        </div>
                        <div className="container-update-column3_expense_report">
                            <div className="input-field_expense_report">
                                <label className="label_field_expense_report">
                                    Paid
                                </label>
                                <input
                                    className="input_field_for_expense_report"
                                    value={paid}
                                    onChange={(e) => setPaid(e.target.value)} 
                                />
                            </div>
                            <div className="input-field_expense_report">
                                <label className="label_field_expense_report">
                                    Due
                                </label>
                                <input
                                    className="input_field_for_expense_report"
                                    value={due}
                                    onChange={(e) => setDue(e.target.value)} 
                                />
                            </div>
                        </div>
                        <div className="container-update-column4_expense_report">
                            <div className="input-field_expense_report">
                                <button
                                    className="button_field_expense_report"
                                    type="submit"
                                    onClick={handleUpdate}
                                >
                                    Update
                                </button>
                            </div>
                        </div>
                        <div className="container-update-column5_expense_report">
                            <h4>Due Paid</h4>
                            <div className="input-field_expense_report">
                                <label className="label_field_expense_report">
                                    TK
                                </label>
                                <input className="input_field_for_expense_report" />
                                <button
                                    className="button_field_expense_report"
                                    type="submit"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpenseReport;
