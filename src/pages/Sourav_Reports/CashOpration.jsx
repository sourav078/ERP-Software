import React from "react";
import "./cash-opration.css";
import { useState } from "react";
// Current Date
// const current = new Date();
// let currentDate = `${current.getFullYear()}/${
//   current.getMonth() + 1
// }/${current.getDate()}`;

const CashOpration = () => {
  const [type, setType] = useState("");
  const [taka, setTaka] = useState("");
  const [commant, setComment] = useState("");
  const [callanNo, setCallanNo] = useState("None");
  const [outTaka, setOutTaka] = useState("0");
  // current date
  const [currentDate, setCurrentDate] = useState(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0]; // Format the date as 'YYYY-MM-DD'
    return formattedDate;
  });
  // const [date, setDate] = useState(currentDate);
  const typeOptions = ["Investment", "Deposit", "Withdraw"];

  const handleSave = async () => {
    try {
      console.log(type, taka, commant, callanNo, outTaka, currentDate);
      await fetch(
        "http://194.233.87.22:5001/api/cash_book/postCashBookRow?taka=" +
          taka +
          "&out_taka=" +
          outTaka +
          "&type=" +
          type +
          "&challan_no=" +
          callanNo +
          "&comment=" +
          commant +
          "&date=" +
          currentDate,
        {
          method: "POST",
          headers: {
            "x-access-token": JSON.parse(
              localStorage.getItem("x-access-token")
            ),
          },
        }
      );

      console.log("Data saved successfully");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };
  const resetInputField = () => {
    setType("");
    setTaka("");
    setComment("");
  };
  return (
    <div className="full_div_cash_opration">
      <h1>Cash Opration</h1>
      <div className="box_cash_opration">
        <div className="cash_opration_container">
          <div className="input-field_cash_opration">
            <label className="label_field_cash_opration">*Type </label>
            <input
              className="input_field_cash_opration"
              name="type"
              value={type}
              onChange={(event) => {
                setType(event.target.value);
              }}
              list="options"
            />
            <datalist id="options">
              {typeOptions.map((option, index) => (
                <option key={index} value={option} />
              ))}
            </datalist>
          </div>
          <div className="input-field_cash_opration">
            <label className="label_field_cash_opration">Taka/Money </label>
            <input
              className="input_field_cash_opration"
              name="taka"
              value={taka}
              onChange={(event) => {
                setTaka(event.target.value);
              }}
            />
          </div>
          <div className="input-field_cash_opration">
            <label className="label_field_cash_opration">Commant </label>
            <input
              className="input_field_cash_opration"
              name="commant"
              value={commant}
              onChange={(event) => {
                setComment(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="input-field_cash_opration">
          <button className="button_field_cash_opration" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CashOpration;
