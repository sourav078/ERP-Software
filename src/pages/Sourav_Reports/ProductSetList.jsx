import React from "react";
import "./product_set_&_list.css";
import { useState, useEffect } from "react";
import ExportExcel from "../../components/ExportExcel";
import { RotatingLines } from "react-loader-spinner";
import { useLocation } from "react-router-dom";

// http://194.233.87.22:5001/api/product_list/getProductList
const ProductSetList = () => {
    const location = useLocation();

    const [rows, setRows] = useState([]);
    const [allCategory, setallCategory] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState([]);
    const [allProductId, setallProductId] = useState([]);
    const [allProductName, setallProductName] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedProductName, setSelectedProductName] = useState([]);
    const [allProduct, setAllProduct] = useState([]);
    const [selectedProductType, setSelectedProductType] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);

    const [category, setCategory] = useState([]);
    const [code, setCode] = useState([]);
    const [name, setName] = useState([]);
    const [type, setType] = useState([]);

    useEffect(() => {
        localStorage.setItem(
            "x-access-token",
            JSON.stringify(location.state.accessToken)
        );

        setIsLoaded(true);
        const fetchData = async () => {
            try {
                const response_getAllStockTable = await fetch(
                    "http://194.233.87.22:5001/api/product_list/getProductList",
                    {
                        method: "POST",

                        headers: {
                            "x-access-token": JSON.parse(
                                localStorage.getItem("x-access-token")
                            ),
                        },
                    }
                );
                const datas_getAllStockTable =
                    await response_getAllStockTable.json();
                setRows(datas_getAllStockTable);

                const response_getAllStock = await fetch(
                    "http://194.233.87.22:5001/api/product_list/getAllDistinctCategoriesFromProductList",
                    {
                        method: "POST",

                        headers: {
                            "x-access-token": JSON.parse(
                                localStorage.getItem("x-access-token")
                            ),
                        },
                    }
                );
                const datas_getAllStock = await response_getAllStock.json();
                console.log(datas_getAllStock);
                const product_getAllStock = datas_getAllStock.map(
                    ({ category: actualValue }) => actualValue
                );
                setallCategory([...new Set(product_getAllStock)]);
                console.log(product_getAllStock);
                setIsLoaded(false);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, []);

    const handleClickSearchShowAll = () => {
        setIsLoaded(true);
        const fetchData = async () => {
            const response_getProductTableAllData = await fetch(
                "http://194.233.87.22:5001/api/product_list/getProductList",
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
                "http://194.233.87.22:5001/api/product_list/getProductList"
            );
            const datas_getProductTableAllData =
                await response_getProductTableAllData.json();
            console.log(datas_getProductTableAllData);
            setRows(datas_getProductTableAllData);
            console.log(datas_getProductTableAllData);
            setIsLoaded(false);
        };

        // Call the function
        fetchData();
    };

    // Call the function

    // Category field search D3
    const handleKeyDownCategoryName = (event) => {
        // setIsLoaded(true);
        setSelectedCategory(event.target.value);

        const fetchData = async () => {
            const response_getSelectedCategory = await fetch(
                "http://194.233.87.22:5001/api/product_list/getAllDistinctCategoriesFromProductList" +
                    selectedCategory,
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
                "http://194.233.87.22:5001/api/product_list/getAllDistinctCategoriesFromProductList?category=" +
                    selectedCategory
            );
            const datas_getSelectedCategory =
                await response_getSelectedCategory.json();
            console.log(datas_getSelectedCategory);
            const product_getSelectedCategoryID = datas_getSelectedCategory.map(
                ({ category: actualValue }) => actualValue
            );

            setSelectedCategory([...new Set(product_getSelectedCategoryID)]);
            console.log(product_getSelectedCategoryID);
            // setIsLoaded(false);
        };

        // Call the function
        fetchData();
    };

    const handleClickSearchbyCategory = () => {
        setIsLoaded(true);
        const fetchData = async () => {
            const response_getSelectedCategoryForSearch = await fetch(
                "http://194.233.87.22:5001/api/product_list/getAllFromProductListByCategory?category=" +
                    selectedCategory,
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
            const datas_getSelectedCategoryForSearch =
                await response_getSelectedCategoryForSearch.json();
            console.log(datas_getSelectedCategoryForSearch);

            setRows(datas_getSelectedCategoryForSearch);
            setIsLoaded(false);
        };

        // Call the function
        fetchData();
    };

    const handleClickSearchbyProductId = (event) => {
        setIsLoaded(true);
        const fetchData = async () => {
            const response_getSelectedProductIdForSearch = await fetch(
                "http://194.233.87.22:5001/api/product_list/getAllFromProductListByCode?code=" +
                    selectedProductId,
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
            const datas_getSelectedProductIdForSearch =
                await response_getSelectedProductIdForSearch.json();
            console.log(datas_getSelectedProductIdForSearch);

            setRows(datas_getSelectedProductIdForSearch);
            setIsLoaded(false);
        };

        // Call the function
        fetchData();
    };

    //table

    const handleClickTable = (item) => {
        setCategory(item.category);
        setCode(item.code);
        setName(item.product);
        setType(item.model);
    };

    // Product name field search
    const handleKeyDownProductName = (event) => {
        // setIsLoaded(true);
        setSelectedProductName(event.target.value);

        const fetchData = async () => {
            const response_getSelectedProduct = await fetch(
                "http://194.233.87.22:5001/api/product_list/getAllFromProductListByProductNameAndTypeNo?product=" +
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

            console.log(
                "http://194.233.87.22:5001/api/product_list/getAllFromProductListByProductNameAndTypeNo?product=" +
                    selectedProductName
            );
            const datas_getSelectedProduct =
                await response_getSelectedProduct.json();
            console.log(datas_getSelectedProduct);
            const product_getSelectedProductType = datas_getSelectedProduct.map(
                ({ product: actualValue }) => actualValue
            );

            setSelectedProductType([
                ...new Set(product_getSelectedProductType),
            ]);
            console.log(product_getSelectedProductType);
            // setIsLoaded(false);
        };

        // Call the function
        fetchData();
    };

    // Searching Product auto genarated id in the ID field
    const handleClickSearchbyProductNameType = () => {
        // setIsLoaded(true);
        const fetchData = async () => {
            const response_getSelectedProductbyNameType = await fetch(
                "http://194.233.87.22:5001/api/product_list/getAllFromProductListByProductNameAndTypeNo?product=" +
                    selectedProductName +
                    "&model=" +
                    selectedProductType,
                {
                    method: "POST",

                    headers: {
                        "x-access-token": JSON.parse(
                            localStorage.getItem("x-access-token")
                        ),
                    },
                }
            );
            console.log("link");
            const datas_getSelectedProductbyNameType =
                await response_getSelectedProductbyNameType.json();

            console.log(datas_getSelectedProductbyNameType);

            setRows(datas_getSelectedProductbyNameType);
            // setIsLoaded(false);
        };

        // Call the function
        fetchData();
    };

    return (
        <div className="full_div_product_set_list">
            <div className="first_row_div_product_set_list">
                <div className="container_search_column1_product_set_list">
                    <button
                        className="show_all_button_product_set_list_page"
                        onClick={handleClickSearchShowAll}
                    >
                        Show All
                    </button>
                </div>
                <div className="container_search_column3_product_set_list_page">
                    <div>
                        <h5 className="header_class_product_set">
                            Add New Product
                        </h5>
                        <div className="input-field">
                            <label className="label_product_set">
                                Category
                            </label>
                            <select
                                className="select_product_set_list"
                                id="product_name_by_stock_report_search"
                                onSelect={handleKeyDownCategoryName}
                                onChange={(event) =>
                                    setSelectedCategory(event.target.value)
                                }
                            >
                                {allCategory.map((allCategory, index) => {
                                    return (
                                        <option key={index}>
                                            {allCategory}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="input-field_product_set_list_page">
                            <label className="label_product_set">
                                Product ID / Code
                            </label>
                            <input className="input_product_set_list" />
                        </div>
                        <div className="input-field_product_set_list_page">
                            <label className="label_product_set">
                                Product Name
                            </label>
                            <input className="input_product_set_list" />
                        </div>
                        <div className="input-field_product_set_list_page">
                            <label className="label_product_set">
                                Type/No.
                            </label>
                            <input className="input_product_set_list" />
                        </div>
                    </div>
                    <div>
                        <div className="input-field_product_set_list_page">
                            <button
                                className="button_product_set_list_page"
                                type="submit"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container_search_column3_product_set_list_page">
                    <div>
                        <h5 className="header_class_product_set">
                            Update Product Information
                        </h5>
                        <div className="input-field">
                            <label
                                className="label_product_set"
                            >
                                Category
                            </label>
                            <select
                                className="select_product_set_list"
                                id="product_name_by_stock_report_search"
                                onSelect={handleKeyDownCategoryName}
                                value={category}
                                onChange={(event) =>
                                    setSelectedCategory(event.target.value)
                                }
                            >
                                {allCategory.map((allCategory, index) => {
                                    return (
                                        <option key={index}>
                                            {allCategory}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="input-field">
                            <label
                                className="label_product_set"
                                for="total-price-for-customer"
                            >
                                Product ID / Code
                            </label>
                            <input
                                className="input_product_set_list"
                                value={code}
                            />
                        </div>
                        <div className="input-field">
                            <label
                                className="label_product_set"
                                for="total-price-for-customer"
                            >
                                Product Name
                            </label>
                            <input
                                className="input_product_set_list"
                                value={name}
                            />
                        </div>
                        <div className="input-field">
                            <label
                                className="label_product_set"
                                for="total-price-for-customer"
                            >
                                Type/No.
                            </label>
                            <input
                                className="input_product_set_list"
                                value={type}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="input-field">
                            <button
                                className="button_product_set_list_page"
                                type="submit"
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second_row_div_product_set_list">
                <div className="container_search_column4_product_set_list">
                    <div className="field_product_set_list">
                        <div className="field1_product_set_list">
                            <div className="input_field_product_set_list">
                                <label className="label_product_set">
                                    Category
                                </label>
                                <select
                                    className="select_product_set_list"
                                    id="product_name_by_stock_report_search"
                                    onSelect={handleKeyDownCategoryName}
                                    onChange={(event) =>
                                        setSelectedCategory(event.target.value)
                                    }
                                >
                                    {allCategory.map((allCategory, index) => {
                                        return (
                                            <option key={index}>
                                                {allCategory}
                                            </option>
                                        );
                                    })}
                                </select>
                                <button
                                    className="button_product_set_list_page"
                                    type="button"
                                    onClick={(event) =>
                                        handleClickSearchbyCategory(
                                            event.target.value
                                        )
                                    }
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                        <div className="field1_product_set_list">
                            <div className="input_field_product_set_list">
                                <label className="label_product_set">
                                    Product ID
                                </label>
                                <input
                                    className="input_product_set_list"
                                    id="search_by_product_id"
                                    onSelect={(event) =>
                                        setSelectedProductId(event.target.value)
                                    }
                                    onChange={(event) =>
                                        setSelectedProductId(event.target.value)
                                    }
                                    list={"select_product_id"}
                                />
                                <datalist id="select_product_id">
                                    {allProductId.map((allProductId, index) => {
                                        return (
                                            <option key={index}>
                                                {allProductId}
                                            </option>
                                        );
                                    })}
                                </datalist>

                                <button
                                    className="button_product_set_list_page"
                                    type="button"
                                    onClick={(event) =>
                                        handleClickSearchbyProductId(
                                            event.target.value
                                        )
                                    }
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="field3_product_set_list">
                            <div className="field2_product_set_list">
                                <div className="field1_product_set_list">
                                    <div className="input-field_product_set_list">
                                        <label className="label_product_set">
                                            Product Name
                                        </label>
                                        <input
                                            className="input_product_set_list"
                                            id="product_name_by_stock_report_search"
                                            onSelect={handleKeyDownProductName}
                                            onChange={(event) =>
                                                setSelectedProductName(
                                                    event.target.value
                                                )
                                            }
                                            list={"selectproductname"}
                                        />
                                        <datalist id="selectproductname">
                                            {allProduct.map(
                                                (allProduct, index) => {
                                                    return (
                                                        <option key={index}>
                                                            {allProduct}
                                                        </option>
                                                    );
                                                }
                                            )}
                                        </datalist>
                                    </div>
                                </div>
                                <div className="field1_product_set_list">
                                    <div className="input-field_product_set_list">
                                        <label className="label_product_set">
                                            Type No
                                        </label>
                                        <select
                                            className="select_product_set_list"
                                            id="Product_id_by_stock_report_search"
                                            onSelect={(event) =>
                                                setSelectedProductType(
                                                    event.target.value
                                                )
                                            }
                                        >
                                            {selectedProductType.map(
                                                (productType, index) => {
                                                    return (
                                                        <option key={index}>
                                                            {productType}
                                                        </option>
                                                    );
                                                }
                                            )}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="input-field_product_set_list">
                                <button
                                    className="button_product_set_list_page"
                                    type="submit"
                                    onClick={handleClickSearchbyProductNameType}
                                >
                                    {" "}
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="third_row_div_product_set_list rotating_lines_product_set_list">
                {isLoaded ? (
                    <div>
                        <RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="96"
                            visible={true}
                        />
                    </div>
                ) : (
                    <div className="table_div_product_set_list table-wrapper_product_set_list">
                        <table border={3} cellSpacing={2} cellPadding={10}>
                            <tr>
                                <th>Category</th>
                                <th>ID / Code</th>
                                <th>Product Name </th>
                                <th>Type / No</th>
                            </tr>
                            <tbody>
                                {rows.map((item) => (
                                    <tr
                                        className="row"
                                        tabindex="0"
                                        onClick={() => handleClickTable(item)}
                                        key={item.id}
                                    >
                                        <td>{item.category}</td>
                                        <td>{item.code}</td>
                                        <td>{item.product}</td>
                                        <td>{item.model}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <div className="fourth_row_div_product_set_list">
                <div className="container_update_view_product_set_list">
                    <div className="container_view_product_set_list">
                        <div className="input-field_product_set_list">
                            <label className="label_product_set">
                                Product ID
                            </label>
                            <input
                                className="input_product_set_list"
                                value={code}
                            />
                        </div>
                        <div className="input-field_product_set_list">
                            <label className="label_product_set">
                                Product Name
                            </label>
                            <input
                                className="input_product_set_list"
                                value={name}
                            />
                        </div>
                        <div className="input-field_product_set_list">
                            <label className="label_product_set">Type No</label>
                            <input
                                className="input_product_set_list"
                                value={type}
                            />
                        </div>
                    </div>
                    <div>
                        <button className="barcode_button_product_set_list_page">
                            Generate BarCode
                        </button>
                    </div>
                </div>

                <div>
                    <ExportExcel excelData={rows} fileName={"Excel Export"} />
                </div>
            </div>
        </div>
    );
};

export default ProductSetList;
