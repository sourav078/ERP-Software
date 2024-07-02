import { Input, TextField, Alert, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import './salepage.css'


const Salepage = () => {

  const [items, setItems] = useState([]);
  let item_total = 0;

  useEffect(() => {



    const fetchData = async () => {

      //"SELECT DISTINCT name FROM customer"
     //  const response_getAllCustomer = await fetch('http://127.0.0.1:5001/api/customer/getDistinctCustomerName');
      const response_getAllCustomer = await fetch('http://194.233.87.22:5001/api/customer/getDistinctCustomerName');

      const datas_getAllCustomer = await response_getAllCustomer.json();
      console.log(datas_getAllCustomer)
      const product_getAllCustomer = datas_getAllCustomer.map(({ name: actualValue }) => actualValue);

      setAllCustomer([...new Set(product_getAllCustomer)]);
      console.log(product_getAllCustomer);



      //    String select_query = "SELECT shop_name FROM shop_set";   
     // const response_getAllShop = await fetch('http://127.0.0.1:5001/api/shop_set/getAllDistinctShopName');
      const response_getAllShop = await fetch('http://194.233.87.22:5001/api/shop_set/getAllDistinctShopName');
      console.log('http://194.233.87.22:5001/api/shop_set/getAllDistinctShopName');
      const datas_getAllShop = await response_getAllShop.json();
      console.log(datas_getAllShop)
      const product_getAllShop = datas_getAllShop.map(({ shop_name: actualValue }) => actualValue);

      setShop([...new Set(product_getAllShop)]);
      console.log(product_getAllShop);


      //    String s = "SELECT challan_no FROM sale_table";  
      //const response_getMaxChallan = await fetch('http://127.0.0.1:5001/api/sale_table/getMaxChallan');
      const response_getMaxChallan = await fetch('http://194.233.87.22:5001/api/sale_table/getMaxChallan');
      console.log('http://194.233.87.22:5001/api/sale_table/getMaxChallan');
      const datas_getMaxChallan = await response_getMaxChallan.json();
      console.log(datas_getMaxChallan)
      const product_datas_getMaxChallan = datas_getMaxChallan.map(({ challan_no: actualValue }) => actualValue);

      setMaxChallan([...new Set([parseInt(product_datas_getMaxChallan) + 1])]);

      console.log(product_datas_getMaxChallan);


      //    String s = "SELECT name FROM employee ";;  
      //const response_getMaxChallan = await fetch('http://127.0.0.1:5001/api/sale_table/getMaxChallan');
      const response_getAllEmployees = await fetch('http://194.233.87.22:5001/api/employee/getEmployee');
      console.log('http://194.233.87.22:5001/api/employee/getEmployee');
      const datas_getAllEmployees  = await response_getAllEmployees.json();
      console.log(datas_getAllEmployees)
      const product_datas_getAllEmployees_name = datas_getAllEmployees.map(({ name: actualValue }) => actualValue);
      const product_datas_getAllEmployees_id = datas_getAllEmployees.map(({ id: actualValue }) => actualValue);

      setSaleByEmployee([...new Set(product_datas_getAllEmployees_name)]);
      setSaleByEmployeeID([...new Set(product_datas_getAllEmployees_id)]);

      console.log(product_datas_getAllEmployees_name);
      console.log(product_datas_getAllEmployees_id);
    }

    // Call the function
    fetchData();


   

    
  }, []);


  const [product, setProduct] = useState([]);
  const [productModels, setProductModels] = useState([]);
  const [productSumAvailableQuantities, setProductSumAvailableQuantities] = useState([]);
  const [productSaleAvgPurchasePrices, setProductSaleAvgPurchasePrices] = useState([]);
  const [productUnits, setProductUnits] = useState([]);
  const [productSalePrices, setProductSalePrices] = useState([]);
  const [productWarrantys, setProductWarrantys] = useState([]);

  const [IdOrCode, setIdOrCode] = useState('');
  const [rows, setRows] = useState([]);
  const [allCustomer, setAllCustomer] = useState([]);
  const [customerName, setCustomerName] = useState([]);
  const [customerID, setCustomerID] = useState([]);
  const [customerMobile, setCustomerMobile] = useState([]);
  const [customerAddress, setCustomerAddress] = useState([]);
  const [customerTotal, setCustomerTotal] = useState([]);
  const [customerPaid, setCustomerPaid] = useState([]);
  const [customerDue, setCustomerDue] = useState([]);
  const [productSaleQuantity, setProductSaleQuantity] = useState('');
  const [itemTotal, setItemTotal] = useState([]);
  const [shop, setShop] = useState([]);
  const [serial, setSerial] = useState(1);
  const [maxChallan, setMaxChallan] = useState([]);
  //const [AddToCartButtonClicked, setAddToCartButtonClicked] = useState(false);
  const [tableSaleTypeNo, setTableSaleTypeNo] = useState([]);
  const [isDuplicate, setIsDuplicate] = useState(false)
  const [buttonClickNumber, setButtonClickNumber] = useState(0)
  const [isButtonClicked, setIsButtonClicked] = useState(false)
  const [total, setTotal] = useState(0)
  const [presentItemTotal,setPresentItemTotal] = useState(0)
  const [discount,setDiscount] = useState(0)
  const [serviceCharge,setServiceCharge] = useState(0)
  const [grossTotal,setGrossTotal] = useState(0)
  const [grossPaid,setGrossPaid] = useState(0)
  const [grossDue,setGrossDue] = useState(0)
  const [tableGrossTotal,setTableGrossTotal] = useState(0)
  const [saleByEmployee,setSaleByEmployee] = useState([])
  const [saleByEmployeeID,setSaleByEmployeeID] = useState([])



  const handleSaleQuantityChange = (event) => {

    setProductSaleQuantity(event.target.value);
    console.log(productSaleQuantity)
    setItemTotal([parseInt(event.target.value) * parseInt(productSalePrices)]);

    console.log(productSalePrices)
  };

  const handleChange = (event) => {

    setIdOrCode(event.target.value);
  };

  const handleKeyDown = (event) => {
    //if (event.key === 'Enter') {
    // 👇 Get input value
    setIdOrCode(event.target.value);
    
    const fetchData = async () => {

     // const response_getAllStock_By_ProductCode = await fetch('http://127.0.0.1:5001/api/stock/getAllStock_By_ProductCode?product_code=' + IdOrCode)
      const response_getAllStock_By_ProductCode = await fetch('http://194.233.87.22:5001/api/stock/getAllStock_By_ProductCode?product_code=' + IdOrCode)
      const datas_getAllStock_By_ProductCode = await response_getAllStock_By_ProductCode.json();
      console.log(datas_getAllStock_By_ProductCode)
      const product_getAllStock_By_ProductCode = datas_getAllStock_By_ProductCode.map(({ product: actualValue }) => actualValue);
      const product_models_getAllStock_By_ProductCode = datas_getAllStock_By_ProductCode.map(({ model: actualValue }) => actualValue);

      setProduct([...new Set(product_getAllStock_By_ProductCode)]);
      setProductModels([...new Set(product_models_getAllStock_By_ProductCode)]);
      console.log("product :" + product);
      console.log(productModels);
      console.log(product_getAllStock_By_ProductCode);
      console.log(product_models_getAllStock_By_ProductCode);



      //  "SELECT AVG(purchase_price), sale_price, SUM(available_quantity), unit, warranty FROM stock WHERE product ='"
      //  + text_part_name.getText().toString() + "' AND  model ='"
      //  + combo_model.getSelectedItem().toString() + "'  ";

      const response_getAllStock_By_ProductAndModel = await
        //  fetch('http://127.0.0.1:5001/api/stock/getAllStock_By_ProductAndModel?product='+product+'&model='+productModels);
       // fetch('http://127.0.0.1:5001/api/stock/getAllStock_By_ProductAndModel?product=' + product_getAllStock_By_ProductCode[0] + '&model=' + product_models_getAllStock_By_ProductCode[0]);
        fetch('http://194.233.87.22:5001/api/stock/getAllStock_By_ProductAndModel?product=' + product_getAllStock_By_ProductCode[0] + '&model=' + product_models_getAllStock_By_ProductCode[0]);
      console.log('http://194.233.87.22:5001/api/stock/getAllStock_By_ProductAndModel?product=' + product_getAllStock_By_ProductCode + '&model=' + product_models_getAllStock_By_ProductCode);
      const datas_getAllStock_By_ProductAndModel = await response_getAllStock_By_ProductAndModel.json();
      console.log(datas_getAllStock_By_ProductAndModel)
      const product_sum_available_quantities = datas_getAllStock_By_ProductAndModel.map(({ sum_available_quantity: actualValue }) => actualValue);
      const product_sale_avg_purchase_prices = datas_getAllStock_By_ProductAndModel.map(({ avg_purchase_price: actualValue }) => actualValue);
      const product_sale_prices = datas_getAllStock_By_ProductAndModel.map(({ sale_price: actualValue }) => actualValue);
      const product_units = datas_getAllStock_By_ProductAndModel.map(({ unit: actualValue }) => actualValue);
      const product_warrantys = datas_getAllStock_By_ProductAndModel.map(({ warranty: actualValue }) => actualValue);

      setProductSumAvailableQuantities([...new Set(product_sum_available_quantities)]);
      setProductSaleAvgPurchasePrices([...new Set(product_sale_avg_purchase_prices)]);
      setProductSalePrices([...new Set(product_sale_prices)]);
      setProductUnits([...new Set(product_units)]);
      setProductWarrantys([...new Set(product_warrantys)]);
      console.log(product_sum_available_quantities)
      console.log(product_sale_avg_purchase_prices)
      console.log(product_sale_prices)
      console.log(product_units)
      console.log(product_warrantys)
      

    }

    // Call the function
    fetchData();
    //}
  };



  const handleKeyDownByAddToCartButton = (event) => {

    setPresentItemTotal(itemTotal);
    if (parseInt(productSaleQuantity) > parseInt(productSumAvailableQuantities)) {
      alert('Out of Stock');
      
      setPresentItemTotal(itemTotal);
      
      setItemTotal([]);
      
    }


    else {

      if (product.length !== 0) {
        setSerial(serial + 1);
        setTableSaleTypeNo((prevTableSaleTypeNo) => [...prevTableSaleTypeNo, productModels[0]]);
        setRows((prevRows) => [
          ...prevRows,
          {
            SL: serial,
            IDOrCode: IdOrCode,
            ProductName: product,
            TypeNo: productModels,
            Warranty: productWarrantys,
            SalesPrice: productSalePrices,
            Quantity: productSaleQuantity,
            Unit: productUnits,
            ItemTotal: itemTotal,

          },
        ]);
        
        
       // setTotal(parseInt(total)+ parseInt(itemTotal));
        if(isDuplicate){
          setTotal(parseInt(total));
          setIsDuplicate(false);
        }
        else{
          setTotal(parseInt(total)+ parseInt(itemTotal));
        }
        
        console.log("total"+total);
        console.log("itemTotal"+itemTotal);
        console.log("presentItemTotal"+presentItemTotal);

      }



      console.log("tableSaleTypeNo:" + tableSaleTypeNo);
      console.log("rows:" + rows);


      setProduct([]);
      setProductModels([]);
      setProductSumAvailableQuantities([]);
      setProductSaleAvgPurchasePrices([]);
      setProductUnits([]);
      setProductSalePrices([]);
      setProductWarrantys([]);
      setIdOrCode("");
      setProductSaleQuantity("");
      setPresentItemTotal(itemTotal);
      setItemTotal([]);
      setIsButtonClicked(false);

    }



  };




  const handleKeyDownCustomerName = (event) => {

    // 👇 Get input value

    setCustomerName(event.target.value);

    const fetchData = async () => {

      // const response_getAllCustomer = await fetch('http://127.0.0.1:5001/api/customer/getDistinctCustomerName?customerLikePart='+customerLikePart);
      const response_getSelectedCustomer = await fetch('http://194.233.87.22:5001/api/customer/getSelectedCustomerID?customername=' + customerName);
      console.log('http://194.233.87.22:5001/api/customer/getSelectedCustomerID?customername=' + customerName);
      const datas_getSelectedCustomer = await response_getSelectedCustomer.json();
      console.log(datas_getSelectedCustomer)
      const product_getSelectedCustomerID = datas_getSelectedCustomer.map(({ id: actualValue }) => actualValue);

      setCustomerID([...new Set(product_getSelectedCustomerID)]);
      console.log(product_getSelectedCustomerID);

      const response_getSelectedCustomerMobile = await fetch('http://194.233.87.22:5001/api/customer/getSelectedCustomerMobile?customername=' + customerName);
      console.log('http://194.233.87.22:5001/api/customer/getSelectedCustomerMobile?customername=' + customerName);
      const datas_getSelectedCustomerMobile = await response_getSelectedCustomerMobile.json();
      console.log(datas_getSelectedCustomerMobile)
      const product_getSelectedCustomerMobile = datas_getSelectedCustomerMobile.map(({ mobile_no: actualValue }) => actualValue);

      setCustomerMobile([...new Set(product_getSelectedCustomerMobile)]);
      console.log(product_getSelectedCustomerMobile);

      const response_getSelectedCustomerAddress = await fetch('http://194.233.87.22:5001/api/customer/getSelectedCustomerAddress?customername=' + customerName);
      console.log('http://194.233.87.22:5001/api/customer/getSelectedCustomerAddress?customername=' + customerName);
      const datas_getSelectedCustomerAddress = await response_getSelectedCustomerAddress.json();
      console.log(datas_getSelectedCustomerAddress)
      const product_getSelectedCustomerAddress = datas_getSelectedCustomerAddress.map(({ address: actualValue }) => actualValue);

      setCustomerAddress([...new Set(product_getSelectedCustomerAddress)]);
      console.log(product_getSelectedCustomerAddress);

      const response_getSelectedCustomerTotal = await fetch('http://194.233.87.22:5001/api/customer/getSelectedCustomerTotal?customername=' + customerName);
      console.log('http://194.233.87.22:5001/api/customer/getSelectedCustomerTotal?customername=' + customerName);
      const datas_getSelectedCustomerTotal = await response_getSelectedCustomerTotal.json();
      console.log(datas_getSelectedCustomerTotal)
      const product_getSelectedCustomerTotal = datas_getSelectedCustomerTotal.map(({ total: actualValue }) => actualValue);

      setCustomerTotal([...new Set(product_getSelectedCustomerTotal)]);
      console.log(product_getSelectedCustomerTotal);

      const response_getSelectedCustomerPaid = await fetch('http://194.233.87.22:5001/api/customer/getSelectedCustomerPaid?customername=' + customerName);
      console.log('http://194.233.87.22:5001/api/customer/getSelectedCustomerPaid?customername=' + customerName);
      const datas_getSelectedCustomerPaid = await response_getSelectedCustomerPaid.json();
      console.log(datas_getSelectedCustomerPaid)
      const product_getSelectedCustomerPaid = datas_getSelectedCustomerPaid.map(({ paid: actualValue }) => actualValue);

      setCustomerPaid([...new Set(product_getSelectedCustomerPaid)]);
      console.log(product_getSelectedCustomerPaid);

      const response_getSelectedCustomerDue = await fetch('http://194.233.87.22:5001/api/customer/getSelectedCustomerDue?customername=' + customerName);
      console.log('http://194.233.87.22:5001/api/customer/getSelectedCustomerDue?customername=' + customerName);
      const datas_getSelectedCustomerDue = await response_getSelectedCustomerDue.json();
      console.log(datas_getSelectedCustomerDue)
      const product_getSelectedCustomerDue = datas_getSelectedCustomerDue.map(({ due: actualValue }) => actualValue);

      setCustomerDue([...new Set(product_getSelectedCustomerDue)]);
      console.log(product_getSelectedCustomerDue);


    }
    // Call the function
    fetchData();

  };


  const handleKeyDownDiscount =(event)=>{
    setDiscount(event.target.value);
  }

  const handleKeyDownServiceCharge =(event)=>{
    setServiceCharge(event.target.value);
  }

  const handleKeyDownPaid = (event)=>{
    setGrossPaid(event.target.value);
  }

  const handleChangeTotalAmount = (event)=>{
    setTableGrossTotal(event.target.value);
  }



  return (

    <div className='full_div_sale_page'>

      <div className='first_row_div_sale_page'>
        <div className="container_sale_input_sale_page">

          <div className="container_sale_input_second_column_sale_page">

            <label for="inputIdCode">ID/Code*
            </label>
            <input
              value={IdOrCode}
              id='inputIdCode'
              onChange={handleChange}
              onKeyUp={handleKeyDown}
            />



            <label for="selectProduct">Product*
            </label>
            <select
              onSelect={event => setProduct(event.target.value)}
              id='selectProduct'
            >
              {/* <option>Please choose one option</option> */}
              {product.map((product, index) => {
                return <option key={index} >
                  {product}
                </option>
              })}
            </select>

            <label for="selectProductModel">
              Model*
            </label>
            <select
              id='selectProductModel'
            //onChange={event => setProductModels(event.target.value)}
            // onSelect={checkProductTypeDuplicate}
            // onSelect={(e) => this.setProductModels.bind(this, e.target.value)}
            >
              {productModels.map((product_model, index) => {
                return <option key={index} >
                  {product_model}
                </option>
              })}
            </select>

            <label for="selectProductAvailableQuantity">Available Quantity*
            </label>
            <select
              id='selectProductAvailableQuantity'
              onSelect={event => setProductSumAvailableQuantities(event.target.value)}
            >

              {productSumAvailableQuantities.map((productSumAvailableQuantities, index) => {
                return <option key={index} >
                  {productSumAvailableQuantities}
                </option>
              })}
            </select>

            <label for="inputProductAvailableQuantity">Available Quantity*
            </label>
            <input
              id='inputProductAvailableQuantity'
              placeholder=''
            />
          </div>

          <div className="container_sale_input_third_column_sale_page">

            <label for="selectProductSalePrices">Sale Price*
            </label>
            <select
              id='selectProductSalePrices'
              onSelect={event => setProductSalePrices(event.target.value)}
              placeholder='Sales Price'
            // style={{height:"5vh",
            // width:"15vw",

            // }}
            >

              {productSalePrices.map((product_sale_price, index) => {
                return <option key={index} >
                  {product_sale_price}
                </option>
              })}
            </select>


            <label for="inputProductSaleQuantity">Sale Quantity*
            </label>
            <input
              type='number'
              id='inputProductSaleQuantity'
              value={
                productSaleQuantity
              }
              onInput={handleSaleQuantityChange}
              placeholder='*Sale Quantity'
            />

            <label for="selectItemTotal">Item Total*
            </label>
            <select
              id='selectItemTotal'
              placeholder='Item Total'
            >
              {itemTotal.map((itemTotal, index) => {
                return <option key={index} >
                  {itemTotal}
                </option>
              })}
            </select>

            <label for="selectWarranty">Warranty*
            </label>
            <select
              id='selectWarranty'
              onChange={event => setProductWarrantys(event.target.value)}
              placeholder='Warranty'
            >

              {productWarrantys.map((productWarranty, index) => {
                return <option key={index} >
                  {productWarranty}
                </option>
              })}
            </select>


            <label for="blanck">*
            </label>
            <input
              id='blanck'
              placeholder=''
            />
          </div>

          <div className='add_to_cart_button_div_sale_page'>


            <button type="button"
              className='add_to_cart_button'

              onClick={handleKeyDownByAddToCartButton}
            >
              Add to Cart

            </button>



          </div>

        </div>


        <div className="container_customer_information_sale_page">

          <div className='div_customer_label_input_sale_page'>
            <label for="checkboxPermanentCustomer_sale_page">Permanent Customer
            </label>
            {/* {checked ? (
                           <div> Checkbox is checked. </div>
                           ) : (
                          <div> Checkbox is not checked. </div>
                          )} */}
            <input value="Permanent Customer" type="checkbox" id='checkboxPermanentCustomer_sale_page' />

            <label for="selectCustomer">Customer*
            </label>
            <input
              id='selectCustomer'
              placeholder=''
              type={'search'}
              list={'selectcolor'}

              onSelect={handleKeyDownCustomerName}
              onChange={event => setCustomerName(event.target.value)}
            />
            <datalist id='selectcolor'>

              {allCustomer.map((allCustomer, index) => {
                return <option key={index} >
                  {allCustomer}
                </option>
              })
              }

            </datalist>

            <label for="selectID">ID*
            </label>
            <select
              id='selectID'
              onSelect={event => setCustomerID(event.target.value)}
              placeholder='ID'

            >

              {customerID.map((customerID, index) => {
                return <option key={index} >
                  {customerID}
                </option>
              })}
            </select>

            <label for="selectMobile">Mobile*
            </label>
            <select
              id='selectMobile'
              onSelect={event => setCustomerMobile(event.target.value)}
              placeholder='Mobile'

            >

              {customerMobile.map((customerMobile, index) => {
                return <option key={index} >
                  {customerMobile}
                </option>
              })
              }
            </select>

            <label for="selectAddress">Address*
            </label>
            <select
              id='selectAddress'
              onSelect={event => setCustomerAddress(event.target.value)}
              placeholder='Address'

            >

              {customerAddress.map((customerAddress, index) => {
                return <option key={index} >
                  {customerAddress}
                </option>
              })
              }
            </select>

          </div>
          <div className='total_paid_due_div_sale_page'>


            <label for="Total">Total
            </label>
            <select
              id='Total'
              onSelect={event => setCustomerTotal(event.target.value)}
              placeholder='*Total'
            >

              {customerTotal.map((customerTotal, index) => {
                return <option key={index} >
                  {customerTotal}
                </option>
              })
              }
            </select>


            <label for="Paid">Paid
            </label>
            <select
              id='Paid'
              onSelect={event => setCustomerPaid(event.target.value)}
              placeholder='*Paid'

            >

              {customerPaid.map((customerPaid, index) => {
                return <option key={index} >
                  {customerPaid}
                </option>
              })}
            </select>


            <label for="Due">Due
            </label>
            <select
              id='Due'
              onSelect={event => setCustomerDue(event.target.value)}
              placeholder='*Due'
            // style={{height:"5vh",
            // width:"5vw",

            // }}
            >

              {customerDue.map((customerDue, index) => {
                return <option key={index} >
                  {customerDue}
                </option>
              })}
            </select>

          </div>




        </div>
      </div>


      <div className='second_row_div_sale_page'>
        <div className="table_div_sale_page">

          <table border={0} cellSpacing={3} cellPadding={10} className="table" >
            <tr className='table-data_sale_page'>
              <th className='table-data_sale_page'>SL</th>
              <th className='table-data_sale_page'>ID/Code</th>
              <th className='table-data_sale_page'>Product Name</th>
              <th className='table-data_sale_page'>Type/No</th>
              <th className='table-data_sale_page'>Warranty</th>
              <th className='table-data_sale_page'>Sales Price</th>
              <th className='table-data_sale_page'>Quantity</th>
              <th className='table-data_sale_page'>Unit</th>
              <th className='table-data_sale_page'>Item Total</th>
            </tr>
            <tbody
            >
              {
                (tableSaleTypeNo.length !== [...new Set(tableSaleTypeNo)].length) ? (
                  alert('Type No Duplicate'),              
                  rows.pop(),
                  rows.map((item) =>
                    <tr className='table-data_sale_page' key={item.id}>

                      <td>{item.SL}</td>
                      <td>{item.IDOrCode}</td>
                      <td>{item.ProductName}</td>
                      <td>{item.TypeNo}</td>
                      <td>{item.Warranty}</td>
                      <td>{item.SalesPrice}</td>
                      <td>{item.Quantity}</td>
                      <td>{item.Unit}</td>
                      <td>{item.ItemTotal}</td>
                    </tr>

                  )

                ) : (


                  rows.map((item) =>

                    <tr className='table-data_sale_page' key={item.id}>

                      <td>{item.SL}</td>
                      <td>{item.IDOrCode}</td>
                      <td>{item.ProductName}</td>
                      <td>{item.TypeNo}</td>
                      <td>{item.Warranty}</td>
                      <td>{item.SalesPrice}</td>
                      <td>{item.Quantity}</td>
                      <td>{item.Unit}</td>
                      <td>{item.ItemTotal}</td>
                    </tr>
                  )
                )

              }
            </tbody>

          </table>



        </div>

        <div className="sales_summary_div_sale_page">
          <div className='sales_summary_div_first_column_sale_page'>

            <label for="inputTotalAmount">*Total Amount
            </label>
            <input


              value={
                (tableSaleTypeNo.length !== [...new Set(tableSaleTypeNo)].length)?(
                    tableSaleTypeNo.pop(),
                    setIsDuplicate(true),
                    rows.map((item) =>
                    
                     item_total = item_total + parseInt(item.ItemTotal)
                    ),
                    parseInt(item_total)
                    
                   
                   ):
                   (
                    rows.map((item) =>
                    
                     item_total = item_total + parseInt(item.ItemTotal)
                    ),
                    parseInt(item_total)
                    
                    )
                
            
              }
              id='inputTotalAmount'
              
            />

            <label for="inputDiscount">*Discount
            </label>
            <input
            
              id='inputDiscount'
              onKeyUp={handleKeyDownDiscount}
            />

            <label for="inputServiceExtraCharge">*Service/Extra Charge
            </label>
            <input
              id='inputServiceExtraCharge'
              onKeyUp={handleKeyDownServiceCharge}
            />

            <label for="inputTotal">*Total
            </label>
            <input
            value={
              (
                
                parseInt(item_total)-parseInt(discount) + parseInt(serviceCharge)
                
                )
           
            }
              id='inputTotal'

            />

            <label for="inputPaid">*Paid
            </label>
            <input
              id='Paid'
              onKeyUp={handleKeyDownPaid}
            />

            <label for="inputDue">*Due
            </label>
            <input
            value={
              ( 
                parseInt(item_total)-parseInt(discount) + parseInt(serviceCharge - parseInt(grossPaid))                
                
              )
           
            }
              id='Due'
            />

            <label for="selectChallanNo">*Challan No
            </label>
            <select
              id='selectChallanNo'
              onSelect={event => setMaxChallan(event.target.value)}
              placeholder='*Challan No'

            >

              {maxChallan.map((maxChallan, index) => {
                return <option key={index} >
                  {maxChallan}
                </option>
              })}
            </select>

            <label for="inputDate">*Sale Date
            </label>
            <input
              id='inputDate'
              type={"date"}
            />

            <label for="selectShop">*Shop
            </label>
            <select
              id='selectShop'
              onSelect={event => setShop(event.target.value)}
              placeholder='*Shop'

            >

              {shop.map((shop, index) => {
                return <option key={index} >
                  {shop}
                </option>
              })}
            </select>


            <label for="inputPaymentType">*Payment Type
            </label>
            <select
              id='inputBankCheque'
              

            >

                 <option  >
                  Hand Cash
                </option>
                <option  >
                  Bank Payment 
                </option>
              
            </select>

            <label for="inputBankCheque">*Bank Cheque
            </label>
            <input
              id='inputBankCheque'
            />

            <label for="inputBankName">*Bank Name
            </label>
            <input
              id='inputBankName'
            />
          </div>
        </div>
      </div>


      <div className='third_row_div_sale_page'>
        <div className='container_sale_by_sale_page'>


          <label for="inputCommentServices">Comment/Services
          </label>
          <input
            style={{
              height: "3vh",
              width: "35vw",
            }}
            id='inputCommentServices'
          />





          <label for="SaleBy">Sale By
          </label>
          <select
            id='selectSaleBy'
            onSelect={event => setSaleByEmployee(event.target.value)}
          >

            {saleByEmployee.map((saleByEmployee, index) => {
              return <option key={index} >
                {saleByEmployee}
              </option>
            })
            }
          </select>



          <label for="selectEmployeeID">Employee ID
          </label>
          <select
            id='selectEmployeeID'
          onSelect={event => setSaleByEmployeeID(event.target.value)}

          >

            {saleByEmployeeID.map((saleByEmployeeID, index) => {
              return <option key={index} >
                {saleByEmployeeID}
              </option>
            })}
          </select>



          <label for="inputSaleArea">Sale Area
          </label>
          <input
            id='inputSaleArea'
          />






        </div>

        <div className='container_approve_sale_sale_page'>

          <button type="button"
            className='button_approve_sale_sale_page'
            onClick={handleKeyDownByAddToCartButton}
          >
            Approve Sale

          </button>

          <button type="button"
            className='button_reset_sale_page'
            onClick={handleKeyDownByAddToCartButton}
          >
            Reset

          </button>
        </div>
      </div>

    </div>

  );
}

export default Salepage