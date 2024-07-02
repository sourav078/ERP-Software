import { useEffect, useState } from 'react';
import './productsalesreportpage.css'
const ProductSalesReportPage = (props) => {



    const [items, setItems] = useState([]);

    useEffect(() => {

        const fetchData = async () => {

            //"SELECT DISTINCT name FROM customer"
            // const response_getAllCustomer = await fetch('http://127.0.0.1:5001/api/customer/getDistinctCustomerName?customerLikePart='+customerLikePart);
            const response_getAllCustomer = await fetch('http://127.0.0.1:5001/api/customer/getDistinctCustomerName');

            const datas_getAllCustomer = await response_getAllCustomer.json();
            console.log(datas_getAllCustomer)
            const product_getAllCustomer = datas_getAllCustomer.map(({ name: actualValue }) => actualValue);

            setAllCustomer([...new Set(product_getAllCustomer)]);
            console.log(product_getAllCustomer);



            //    String select_query = "SELECT shop_name FROM shop_set";   
            const response_getAllShop = await fetch('http://127.0.0.1:5001/api/shop_set/getAllDistinctShopName');
            console.log('http://127.0.0.1:5001/api/shop_set/getAllDistinctShopName');
            const datas_getAllShop = await response_getAllShop.json();
            console.log(datas_getAllShop)
            const product_getAllShop = datas_getAllShop.map(({ shop_name: actualValue }) => actualValue);

            setShop([...new Set(product_getAllShop)]);
            console.log(product_getAllShop);


            //    String s = "SELECT challan_no FROM sale_table";  
            const response_getMaxChallan = await fetch('http://127.0.0.1:5001/api/sale_table/getMaxChallan');
            console.log('http://127.0.0.1:5001/api/sale_table/getMaxChallan');
            const datas_getMaxChallan = await response_getMaxChallan.json();
            console.log(datas_getMaxChallan)
            const product_datas_getMaxChallan = datas_getMaxChallan.map(({ challan_no: actualValue }) => actualValue);

            setMaxChallan([...new Set([parseInt(product_datas_getMaxChallan) + 1])]);

            console.log(product_datas_getMaxChallan);
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

            const response_getAllStock_By_ProductCode = await fetch('http://127.0.0.1:5001/api/stock/getAllStock_By_ProductCode?product_code=' + IdOrCode)
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
                fetch('http://127.0.0.1:5001/api/stock/getAllStock_By_ProductAndModel?product=' + product_getAllStock_By_ProductCode[0] + '&model=' + product_models_getAllStock_By_ProductCode[0]);
            console.log('http://127.0.0.1:5001/api/stock/getAllStock_By_ProductAndModel?product=' + product_getAllStock_By_ProductCode + '&model=' + product_models_getAllStock_By_ProductCode);
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



    const handleKeyDownByAddToCartButton = () => {




        if (product.length !== 0) {
            setSerial(serial + 1);
            setRows((prevRows) => [
                ...prevRows,
                {
                    SL: serial,
                    IDOrCode: IdOrCode, // Random age
                    ProductName: product,
                    TypeNo: productModels,
                    Warranty: productWarrantys,
                    SalesPrice: productSalePrices,
                    Quantity: productSaleQuantity,
                    Unit: productUnits,
                    ItemTotal: itemTotal,

                },
            ]);
        }


        setProduct([]);
        setProductModels([]);
        setProductSumAvailableQuantities([]);
        setProductSaleAvgPurchasePrices([]);
        setProductUnits([]);
        setProductSalePrices([]);
        setProductWarrantys([]);
        setIdOrCode("");
        setProductSaleQuantity("");
        setItemTotal([]);
    };

    const handleKeyDownCustomerName = (event) => {

        // 👇 Get input value

        setCustomerName(event.target.value);

        const fetchData = async () => {

            // const response_getAllCustomer = await fetch('http://127.0.0.1:5001/api/customer/getDistinctCustomerName?customerLikePart='+customerLikePart);
            const response_getSelectedCustomer = await fetch('http://127.0.0.1:5001/api/customer/getSelectedCustomerID?customername=' + customerName);
            console.log('http://127.0.0.1:5001/api/customer/getSelectedCustomerID?customername=' + customerName);
            const datas_getSelectedCustomer = await response_getSelectedCustomer.json();
            console.log(datas_getSelectedCustomer)
            const product_getSelectedCustomerID = datas_getSelectedCustomer.map(({ id: actualValue }) => actualValue);

            setCustomerID([...new Set(product_getSelectedCustomerID)]);
            console.log(product_getSelectedCustomerID);

            const response_getSelectedCustomerMobile = await fetch('http://127.0.0.1:5001/api/customer/getSelectedCustomerMobile?customername=' + customerName);
            console.log('http://127.0.0.1:5001/api/customer/getSelectedCustomerMobile?customername=' + customerName);
            const datas_getSelectedCustomerMobile = await response_getSelectedCustomerMobile.json();
            console.log(datas_getSelectedCustomerMobile)
            const product_getSelectedCustomerMobile = datas_getSelectedCustomerMobile.map(({ mobile_no: actualValue }) => actualValue);

            setCustomerMobile([...new Set(product_getSelectedCustomerMobile)]);
            console.log(product_getSelectedCustomerMobile);

            const response_getSelectedCustomerAddress = await fetch('http://127.0.0.1:5001/api/customer/getSelectedCustomerAddress?customername=' + customerName);
            console.log('http://127.0.0.1:5001/api/customer/getSelectedCustomerAddress?customername=' + customerName);
            const datas_getSelectedCustomerAddress = await response_getSelectedCustomerAddress.json();
            console.log(datas_getSelectedCustomerAddress)
            const product_getSelectedCustomerAddress = datas_getSelectedCustomerAddress.map(({ address: actualValue }) => actualValue);

            setCustomerAddress([...new Set(product_getSelectedCustomerAddress)]);
            console.log(product_getSelectedCustomerAddress);

            const response_getSelectedCustomerTotal = await fetch('http://127.0.0.1:5001/api/customer/getSelectedCustomerTotal?customername=' + customerName);
            console.log('http://127.0.0.1:5001/api/customer/getSelectedCustomerTotal?customername=' + customerName);
            const datas_getSelectedCustomerTotal = await response_getSelectedCustomerTotal.json();
            console.log(datas_getSelectedCustomerTotal)
            const product_getSelectedCustomerTotal = datas_getSelectedCustomerTotal.map(({ total: actualValue }) => actualValue);

            setCustomerTotal([...new Set(product_getSelectedCustomerTotal)]);
            console.log(product_getSelectedCustomerTotal);

            const response_getSelectedCustomerPaid = await fetch('http://127.0.0.1:5001/api/customer/getSelectedCustomerPaid?customername=' + customerName);
            console.log('http://127.0.0.1:5001/api/customer/getSelectedCustomerPaid?customername=' + customerName);
            const datas_getSelectedCustomerPaid = await response_getSelectedCustomerPaid.json();
            console.log(datas_getSelectedCustomerPaid)
            const product_getSelectedCustomerPaid = datas_getSelectedCustomerPaid.map(({ paid: actualValue }) => actualValue);

            setCustomerPaid([...new Set(product_getSelectedCustomerPaid)]);
            console.log(product_getSelectedCustomerPaid);

            const response_getSelectedCustomerDue = await fetch('http://127.0.0.1:5001/api/customer/getSelectedCustomerDue?customername=' + customerName);
            console.log('http://127.0.0.1:5001/api/customer/getSelectedCustomerDue?customername=' + customerName);
            const datas_getSelectedCustomerDue = await response_getSelectedCustomerDue.json();
            console.log(datas_getSelectedCustomerDue)
            const product_getSelectedCustomerDue = datas_getSelectedCustomerDue.map(({ due: actualValue }) => actualValue);

            setCustomerDue([...new Set(product_getSelectedCustomerDue)]);
            console.log(product_getSelectedCustomerDue);


        }
        // Call the function
        fetchData();

    };



    return (

        <div className='full_div'>

            <div className='first_row_div'>
                <div className="container_search">

                    <div className='container_search_first_column'>

                        <label for="search_by_only_date">Date
                        </label>
                        <input
                            type={'Date'}
                            id='search_by_only_date'
                            onChange={handleChange}
                            onKeyUp={handleKeyDown}
                        />
                        <button type="button"
                            onClick={handleKeyDownByAddToCartButton}
                        >
                            Search
                        </button>

                        <label for="search_by_only_input_invoice">Invoice
                        </label>
                        <input

                            id='search_by_only_input_invoice'
                            onChange={handleChange}
                            onKeyUp={handleKeyDown}
                        />
                        <button type="button"
                            onClick={handleKeyDownByAddToCartButton}
                        >
                            Search
                        </button>

                        <label for="search_by_only_product_code">Product Code
                        </label>
                        <input

                            id='search_by_only_product_code'
                            onChange={handleChange}
                            onKeyUp={handleKeyDown}
                        />
                        <button type="button"
                            onClick={handleKeyDownByAddToCartButton}
                        >
                            Search
                        </button>

                    </div>
                    <div className="container_search_second_column">

                        <div class="item1">
                            <label for="search_by_from_date">From Date
                            </label>

                        </div>
                        <div class="item2">
                            <input
                                type={'Date'}
                                id='search_by_from_date'
                                onChange={handleChange}
                                onKeyUp={handleKeyDown}
                            />
                        </div>
                        <div class="item3">
                            <label for="search_by_to_date">To Date
                            </label>
                        </div>
                        <div class="item4">
                            <input
                                type={'Date'}
                                id='search_by_to_date'
                                onChange={handleChange}
                                onKeyUp={handleKeyDown}
                            />
                        </div>
                        <div class="item5">
                            <button type="button"
                                onClick={handleKeyDownByAddToCartButton}
                            >
                                Search
                            </button>
                        </div>

                        <div class="item6">
                            <label for="search_by_customer">Customer
                            </label>

                        </div>
                        <div class="item7">
                            <input

                                id='search_by_customer'
                                onChange={handleChange}
                                onKeyUp={handleKeyDown}
                            />
                        </div>
                        <div class="item8">
                            <label for="selectSearch_by_customer_id">ID
                            </label>
                        </div>
                        <div class="item9">
                            <select
                                id='selectSearch_by_customer_id'
                            // onSelect={event => setSaleBy(event.target.value)}
                            >

                                {customerTotal.map((customerTotal, index) => {
                                    return <option key={index} >
                                        {customerTotal}
                                    </option>
                                })
                                }
                            </select>
                        </div>
                        <div class="item10">
                            <button type="button"
                                onClick={handleKeyDownByAddToCartButton}
                            >
                                Search
                            </button>
                        </div>

                        <div class="item11">
                            <label for="search_by_product">Product
                            </label>

                        </div>
                        <div class="item12">
                            <input

                                id='search_by_product'
                                onChange={handleChange}
                                onKeyUp={handleKeyDown}
                            />
                        </div>
                        <div class="item13">
                            <label for="search_by_type_no">Type/No
                            </label>
                        </div>
                        <div class="item14">
                            <select
                                id='selectSearch_by_customer_id'
                            // onSelect={event => setSaleBy(event.target.value)}
                            >

                                {customerTotal.map((customerTotal, index) => {
                                    return <option key={index} >
                                        {customerTotal}
                                    </option>
                                })
                                }
                            </select>
                        </div>
                        <div class="item15">
                            <button type="button"
                                onClick={handleKeyDownByAddToCartButton}
                            >
                                Search
                            </button>
                        </div>
                    </div>

                    <div className="container_search_third_column">

                        <div>
                            <button type="button"
                                onClick={handleKeyDownByAddToCartButton}
                            >
                                Show All
                            </button>

                        </div>
                        <div>
                            <button type="button"
                                onClick={handleKeyDownByAddToCartButton}
                            >
                                Excel
                            </button>

                        </div>

                    </div>



                </div>

            </div>


            <div className='second_row_div'>
                <div className="table_div">

                    <table border={0} cellSpacing={3} cellPadding={10} className="table" >
                        <tr className='table-row'>
                            <th className='table-cell'>SL</th>
                            <th className='table-cell'>Invoice</th>
                            <th className='table-cell'>Customer</th>
                            <th className='table-cell'>CID</th>
                            <th className='table-cell'>ID/Code</th>
                            <th className='table-cell'>Product</th>
                            <th className='table-cell'>Type/No</th>
                            <th className='table-cell'>Warranty</th>
                            <th className='table-cell'>Sale Price</th>
                            <th className='table-cell'>Quantity</th>
                            <th className='table-cell'>Unit</th>
                            <th className='table-cell'>Total Tk</th>
                            <th className='table-cell'>Sale Date</th>
                            <th className='table-cell'>Entry Date</th>
                            <th className='table-cell'>Shop</th>
                        </tr>
                        <tbody>
                            {
                                rows.map((item) =>
                                    <tr className='table-data' key={item.id}>
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
                            }
                        </tbody>

                    </table>



                </div>


            </div>


            <div className='third_row_div'>
                <div className='container_reset_update'>
                    
                    <div className='container_reset_update_first_column'>
                    <div class="item1">
                        <label for="reset_update_by_invoice_no">Invoice No
                        </label>

                    </div>
                    <div class="item2">
                        <input
                            id='reset_update_by_Invoice No'
                            onChange={handleChange}
                            onKeyUp={handleKeyDown}
                        />
                    </div>

                    <div class="item3">
                            <label for="reset_update_by_shop_name">Shop Name
                            </label>

                        </div>
                        <div class="item4">
                            <input
                                id='reset_update_by_shop_name'
                                onChange={handleChange}
                                onKeyUp={handleKeyDown}
                            />
                        </div>

                        <div class="item5">
                        <select
                                id='select_reset_update_by_shop'
                            // onSelect={event => setSaleBy(event.target.value)}
                            >

                                {customerTotal.map((customerTotal, index) => {
                                    return <option key={index} >
                                        {customerTotal}
                                    </option>
                                })
                                }
                            </select>

                        </div>
                        <div class="item6">
                        <button type="button"
                        className='button_view_invoice'
                        onClick={handleKeyDownByAddToCartButton}
                    >
                        View Invoice

                    </button>
                        </div>
                        <div class="item7">
                            <label for="reset_update_by_customer_name">Customer Name
                            </label>

                        </div>
                        <div class="item8">
                            <input
                                id='reset_update_by_customer_name'
                                onChange={handleChange}
                                onKeyUp={handleKeyDown}
                            />
                        </div>
                        <div class="item9">
                            <label for="reset_update_by_customer_id">Customer ID 
                            </label>

                        </div>
                        <div class="item10">
                            <input
                                id='reset_update_by_customer_id'
                                onChange={handleChange}
                                onKeyUp={handleKeyDown}
                            />
                        </div>
                        <div class="item11">
                            <label for="reset_update_by_sale_date">Sale Date
                            </label>

                        </div>
                        <div class="item12">
                            <input
                                id='reset_update_by_sale_date'
                                onChange={handleChange}
                                onKeyUp={handleKeyDown}
                            />
                        </div>
                    </div>

                    <div className='container_reset_update_second_column'>
                    <div class="item1">
                        <label for="reset_update_by_product_id_code">Product Id/Code 
                        </label>

                    </div>
                    <div class="item2">
                        <input
                            id='reset_update_by_product_id_code'
                            onChange={handleChange}
                            onKeyUp={handleKeyDown}
                        />
                    </div>

                    <div class="item3">
                            <label for="reset_update_by_product_name">Product Name
                            </label>

                        </div>
                        <div class="item4">
                            <input
                                id='reset_update_by_product_name'
                                onChange={handleChange}
                                onKeyUp={handleKeyDown}
                            />
                        </div>

                        <div class="item5">
                            <label for="reset_update_by_type_no">Type/No
                            </label>

                        </div>
                        <div class="item6">
                        <select
                                id='select_reset_update_by_type_no'
                            // onSelect={event => setSaleBy(event.target.value)}
                            >

                                {customerTotal.map((customerTotal, index) => {
                                    return <option key={index} >
                                        {customerTotal}
                                    </option>
                                })
                                }
                            </select>
                        </div>
                        <div class="item7">
                            <label for="reset_update_by_warranty">Warranty
                            </label>

                        </div>
                        <div class="item8">
                            <input
                                id='reset_update_by_warranty'
                                onChange={handleChange}
                                onKeyUp={handleKeyDown}
                            />
                        </div>
                        
                    </div>

                    <div className='container_reset_update_third_column'>
                    <div class="item1">
                        <label for="reset_update_by_product_sale_price">Sale Price 
                        </label>

                    </div>
                    <div class="item2">
                        <input
                            id='reset_update_by_product_sale_price'
                            onChange={handleChange}
                            onKeyUp={handleKeyDown}
                        />
                    </div>

                    <div class="item3">
                            <label for="reset_update_by_quantity">Quantity
                            </label>

                        </div>
                        <div class="item4">
                            <input
                                id='reset_update_by_quantity'
                                onChange={handleChange}
                                onKeyUp={handleKeyDown}
                            />
                        </div>

                        <div class="item5">
                            <label for="reset_update_by_total_item_price">Total Item Price
                            </label>

                        </div>
                        <div class="item6">
                        <input
                                id='reset_update_by_total_item_price'
                                onChange={handleChange}
                                onKeyUp={handleKeyDown}
                            />
                        </div>
                        <div class="item7">
                            <label for="reset_update_by_entry_date">Entry Date
                            </label>

                        </div>
                        <div class="item8">
                            <input
                                id='reset_update_by_entry_date'
                                onChange={handleChange}
                                onKeyUp={handleKeyDown}
                            />
                        </div>
                        <div class="item9">

                        <button type="button"
                           
                           onClick={handleKeyDownByAddToCartButton}
                        >
                        Reset

                        </button>

                       
                        </div>
                        <div class="item10">

                        <button type="button"
                           
                           onClick={handleKeyDownByAddToCartButton}
                        >
                        Update

                        </button>

                       
                        </div>
                        

                        
                    </div>
                

                </div>

                <div className='container_sales_return'>

                    
                        <div>
                        <label for="sales_return">Sales Return
                            </label>
                        </div>
                        <div>
                        <label for="sales_quantity">Quantity
                        </label>
                        <input
                                id='sales_quantity'
                                onChange={handleChange}
                                onKeyUp={handleKeyDown}
                            />

<select
                                id='select_piece'
                            // onSelect={event => setSaleBy(event.target.value)}
                            >

                                {customerTotal.map((customerTotal, index) => {
                                    return <option key={index} >
                                        {customerTotal}
                                    </option>
                                })
                                }
                            </select>
                        
                        </div>
                        <div>
                        <label for="sales_also_return_taka_money">Also Return Tk/Money
                        </label>
                        <input
                                id='sales_also_return_taka_money'
                                onChange={handleChange}
                                onKeyUp={handleKeyDown}
                            />

<select
                                id='select_piece'
                            // onSelect={event => setSaleBy(event.target.value)}
                            >

                                {customerTotal.map((customerTotal, index) => {
                                    return <option key={index} >
                                        {customerTotal}
                                    </option>
                                })
                                }
                            </select>
                        
                        </div>
                        <div>
                        
                        </div>
                    
                    <button type="button"
                        className='button_Return'
                        onClick={handleKeyDownByAddToCartButton}
                    >
                        Return

                    </button>

                    <button type="button"
                        className='button_return_report'
                        onClick={handleKeyDownByAddToCartButton}
                    >
                        Return Report

                    </button>
                </div>
            </div>

        </div>
    );
}

export default ProductSalesReportPage