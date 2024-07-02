import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
 
export const SidebarData = [
  {
    title: "Home",
    path: "/homepage",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Sales",
    
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
 
    subNav: [
      {
        title: "Sales",
        path: "/salepage",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Product Sales Report",
        path: "/sales/productsalesreport",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Invoice Report",
        path: "/sales/invoicereport",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Customer Sales Report",
        path: "/sales/customersalesreport",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Sale Transaction Report",
        path: "/sales/saletransactionreport",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Purchases",
    path: "/purchases/bulkpurchases",
    icon: <FaIcons.FaPhone />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
        {
          title: "bulk purchases",
          path: "/purchases/bulkpurchases",
          icon: <IoIcons.IoIosPaper />,
        },
        {
          title: "payment",
          path: "/purchases/payment",
          icon: <IoIcons.IoIosPaper />,
        },
        {
            title: "purchase return",
            path: "/purchases/purchasereturn",
            icon: <IoIcons.IoIosPaper />,
        },
        {
            title: "purchase return receive",
            path: "/purchases/purchasereturnreceive",
            icon: <IoIcons.IoIosPaper />,
        },
        {
            title: "purchase individual",
            path: "/purchases/purchaseindividual",
            icon: <IoIcons.IoIosPaper />,
        }, 
        {
            title: "purchase list",
            path: "/purchases/purchaselist",
            icon: <IoIcons.IoIosPaper />,
        },
        {
            title: "supplier wise purchases",
            path: "/purchases/supplierwisepurchases",
            icon: <IoIcons.IoIosPaper />,
        },
      ],
  },
  {
    title: "Product",
    path: "/product/addproduct",
    icon: <FaIcons.FaEnvelopeOpenText />,
 
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
 
    subNav: [
      {
        title: "Add product",
        path: "/product/addproduct",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Manage Barcode",
        path: "/product/managebarcode",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Manage Brands",
        path: "/product/managebrands",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Manage Categories",
        path: "/product/managecategories",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Manage Units",
        path: "/product/manageunits",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Manage Warehouse",
        path: "/product/managewarehouse",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Product Damages",
        path: "/product/productdamages",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Update Price",
        path: "/product/updateprice",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Upload ProductByCSV",
        path: "/product/uploadproductbycsv",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
  {
    title: "Suppliers",
    path: "/suppliers/addsuppliers",
    icon: <FaIcons.FaEnvelopeOpenText />,
 
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
 
    subNav: [
      {
        title: "Add Suppliers",
        path: "/suppliers/addsuppliers",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Manage Suppliers",
        path: "/suppliers/managesuppliers",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Upload Suppliers",
        path: "/suppliers/uploadsuppliersbycsv",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Customers",
    path: "/customers/addcustomer",
    icon: <FaIcons.FaEnvelopeOpenText />,
 
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
 
    subNav: [
      {
        title: "Add Customers",
        path: "/customers/addcustomer",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Customer Category",
        path: "/customers/customercategory",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Manage Customers",
        path: "/customers/managecustomers",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Upload CustomerByCSV",
        path: "/customers/uploadcustomerbycsv",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];

 