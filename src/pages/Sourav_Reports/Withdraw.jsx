import React from "react";
import "./withdraw.css";
import { useState, useEffect } from "react";
import ExportExcel from "../../components/ExportExcel";
import { RotatingLines } from "react-loader-spinner";
import { useLocation } from "react-router-dom";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Withdraw = () => {
    const location = useLocation();
    const [isLoaded, setIsLoaded] = useState(true);
    const [rows, setRows] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);

    const [fromDate, setFromDate] = useState([]);
    const [toDate, setToDate] = useState([]);

    const [id, setId] = useState([]);
    const [account, setAccNumber] = useState([]);
    const [bank, setBank] = useState([]);
    const [branch, setBranch] = useState([]);
    const [holder, setAccountHolder] = useState([]);
    const [type, setType] = useState([]);
    const [taka, setTaka] = useState([]);
    const [comment, setComment] = useState([]);
    const [date, setDate] = useState([]);

    const handleClickTable = (item) => {
        setId(item.id);
        setAccNumber(item.account);
        setBank(item.bank);
        setBranch(item.branch);
        setAccountHolder(item.holder);
        setType(item.type);
        setTaka(item.taka);
        setComment(item.comment);
        setDate(item.date);
        setSelectedRow(item);
    };

    useEffect(() => {
        setIsLoaded(true);

        const fetchData = async () => {
            try {
                const response_getAllStockTable = await fetch(
                    "http://194.233.87.22:5001/api/bank_deposit_withdraw/getBankDepositWithdraw?style=withdraw",
                    {
                        method: "POST",

                        headers: {
                            "x-access-token":JSON.parse(
                                localStorage.getItem("x-access-token")
                            ),
                        },
                    }
                );

                const datas_getAllStockTable =
                    await response_getAllStockTable.json();
                setRows(datas_getAllStockTable);
            } catch (error) {
                console.log(error.message);
            }
            setIsLoaded(false);
        };
        fetchData();
    }, []);

    const handleClickSearchFromDateAndToDate = (event) => {
        setIsLoaded(true);
        // console.log(onlyDate);

        const fetchData = async () => {
            const response_getSaleTableFromDateAndToDate = await fetch(
                "http://194.233.87.22:5001/api/bank_deposit_withdraw/getAllBankDepositWithdrawFromDateToDate?fromdate=" +
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

            const datas_getSaleTableFromDateAndToDate =
                await response_getSaleTableFromDateAndToDate.json();
            sleep(2000).then(() => {
                setIsLoaded(false);
            });
            setRows(datas_getSaleTableFromDateAndToDate);
            // setIsLoaded(false);
            console.log(datas_getSaleTableFromDateAndToDate);
        };
        // Call the function
        fetchData();
    };

    const handleClickSearchShowAll = () => {
        setIsLoaded(true);
        const fetchData = async () => {
            const response_getProductTableAllData = await fetch(
                "http://194.233.87.22:5001/api/bank_deposit_withdraw/getAllBankDepositWithdrawFromDateToDate?fromdate=2019-04-15&todate=2019-10-17&style=withdraw",
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
                "http://194.233.87.22:5001/api/bank_deposit_withdraw/getAllBankDepositWithdrawFromDateToDate?fromdate=2019-04-15&todate=2019-10-17&style=withdraw"
            );
            const datas_getProductTableAllData =
                await response_getProductTableAllData.json();
            console.log(datas_getProductTableAllData);
            setRows(datas_getProductTableAllData);
            console.log(datas_getProductTableAllData);
            setIsLoaded(false);
        };

        fetchData();
    };

    const totalInAmount = rows.reduce(
        (inAmount, item) => inAmount + Math.round(item.taka),
        0
    );

    const handleDelete = () => {
        if (!selectedRow) {
            alert("Please select a row first!");
            return;
        }

        const deleteData = async () => {
            setIsLoaded(true);
            await fetch(
                "http://194.233.87.22:5001/api/bank_deposit_withdraw/deleteBankDepositWithdrawById?id=" +
                    selectedRow.id,
                { method: "DELETE" }
            );

            console.log("koll");

            sleep(2000).then(() => {
                setIsLoaded(false);
            });

            setIsLoaded(true);
            const response_getTransactionTableAllDataAfterDelete = await fetch(
                "http://194.233.87.22:5001/api/bank_deposit_withdraw/getBankDepositWithdraw?style=withdraw"
            );
            console.log(
                "http://194.233.87.22:5001/api/bank_deposit_withdraw/getBankDepositWithdraw"
            );
            const datas_getTransactionTableAllDataAfterDelete =
                await response_getTransactionTableAllDataAfterDelete.json();
            console.log(datas_getTransactionTableAllDataAfterDelete);
            console.log("kolk");
            setIsLoaded(false);
            sleep(2000).then(() => {
                setRows(datas_getTransactionTableAllDataAfterDelete);
                console.log(datas_getTransactionTableAllDataAfterDelete);
            });

            setIsLoaded(false);
        };

        // Call the function
        deleteData();
    };

    return (
        <div className="full_div_withdraw">
            <div className="first_row_div_withdraw">
                <div className="withdraw_search_column">
                    <label className="label_withdraw" for="search_by_from_date">
                        Date From
                    </label>
                    <input
                        className="withdraw_input"
                        type={"Date"}
                        id="search_by_from_date"
                        onChange={(event) => setFromDate(event.target.value)}
                    />
                </div>
                <div className="withdraw_search_column">
                    <label className="label_withdraw" for="search_by_to_date">
                        to
                    </label>
                    <input
                        className="withdraw_input"
                        type={"Date"}
                        id="search_by_to_date"
                        onChange={(event) => setToDate(event.target.value)}
                    />
                </div>
                <div className="withdraw_search_column">
                    <button
                        className="button_withdraw"
                        onClick={handleClickSearchFromDateAndToDate}
                    >
                        Search
                    </button>
                </div>
                <div className="withdraw_search_column">
                    <button
                        className="button_withdraw_showAll"
                        onClick={handleClickSearchShowAll}
                    >
                        Show All
                    </button>
                </div>
            </div>
            <div className="second_row_div_withdraw ">
                <div className="table_wrapper_withdraw">
                    {isLoaded ? (
                        <div className="rotating_lines_withdraw">
                            <RotatingLines
                                strokeColor="grey"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="96"
                                visible={true}
                            />
                        </div>
                    ) : (
                        <table border={3} cellSpacing={2} cellPadding={10}>
                            <tr>
                                <th>ID</th>
                                <th>Account Number</th>
                                <th>Bank</th>
                                <th>Branch</th>
                                <th>Account Holder</th>
                                <th>Type</th>
                                <th>Taka</th>
                                <th>Comment</th>
                                <th>Date</th>
                            </tr>
                            <tbody>
                                {rows.map((item) => (
                                    <tr
                                        className="row"
                                        tabindex="0"
                                        onClick={() => handleClickTable(item)}
                                        key={item.id}
                                    >
                                        <td>{item.id}</td>
                                        <td>{item.account}</td>
                                        <td>{item.bank}</td>
                                        <td>{item.branch}</td>
                                        <td>{item.holder}</td>
                                        <td>{item.type}</td>
                                        <td>{item.taka}</td>
                                        <td>{item.comment}</td>
                                        <td>{item.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
            <div className="third_row_div_withdraw">
                <div className="withdraw_last_row">
                    <label className="label_withdraw"> Total Taka</label>
                    <input
                        className="input_total_amount_withdraw"
                        value={totalInAmount}
                    />
                </div>
                <div className="withdraw_last_row">
                    <ExportExcel excelData={rows} fileName={"Excel Export"} />
                </div>
                <div className="withdraw_last_row">
                    <button
                        className="delete_withdraw_button"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Withdraw;
