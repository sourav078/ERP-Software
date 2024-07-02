import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/home/homepage';
import Sale from './pages/sale/Salepage';
import Stock from './pages/stock/stockpage';
import Purchase from './pages/purchase/purchase_page';
import Balance from './pages/balance/balance_page';
import Service from './pages/service/service_page';
import Transaction from './pages/transaction/transaction_page';
import ProductSalesReportPage from "./pages/sale/ProductSalesReportPage";
import SaleTransactionReport from "./pages/Sourav_Reports/SaleTransactionReport";
import PurchaseReport from "./pages/Sourav_Reports/PurchaseProductCostReport";
import ProductPurchaseReport from "./pages/Sourav_Reports/ProductPurchaseReport";
import ProductSetList from "./pages/Sourav_Reports/ProductSetList";
import Login from "./pages/Sourav_Reports/Login";
import BankTransactionReport from "./pages/Sourav_Reports/BankTransactionReport";
import Deposit from "./pages/Sourav_Reports/Deposit";
import Withdraw from "./pages/Sourav_Reports/Withdraw";
import Services from "./pages/Sourav_Reports/Services";
import Permanent_Customer_setup  from './pages/Sourav_Reports/Permanent_Customer_setup';
import ExpenseReport from './pages/Sourav_Reports/ExpenseReport';
import ProductCostReport from './pages/Sourav_Reports/ProductCostReport';
import SupplierReports from './pages/Sourav_Reports/SupplierReports';
import ProfitLossReport from './pages/Sourav_Reports/ProfitLossReport';
import StockOperation from './pages/Sourav_Reports/StockOperation';
function App() {
  return (
    <Router>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<SaleTransactionReport/>}></Route>
        <Route path="/saletransaction" element={<SaleTransactionReport/>}></Route>
        <Route path="/PurchaseReport" element={<PurchaseReport/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/ProductSetList" element={<ProductSetList/>}></Route>
        <Route path="/ProductPurchaseReport" element={<ProductPurchaseReport/>}></Route>
        <Route path="/BankTransactionReport" element={<BankTransactionReport/>}></Route>
        <Route path="/Deposit" element={<Deposit/>}></Route>
        <Route path="/Withdraw" element={<Withdraw/>}></Route>
        <Route path="/Services" element={<Services/>}></Route>
        <Route path="/ExpenseReport" element={<ExpenseReport/>}></Route>
        <Route path="/ProductCostReport" element={<ProductCostReport/>}></Route>
        <Route path="/StockOperation" element={<StockOperation/>}></Route>
        <Route path="/SupplierReports" element={<SupplierReports/>}></Route>
        <Route path="/ProfitLossReport" element={<ProfitLossReport/>}></Route>
        <Route path="/Permanent_Customer_setup" element={<Permanent_Customer_setup/>}></Route>
        <Route path="/homepage" element={<Homepage/>}></Route>

        <Route path="/salepage" element={<Sale/>}></Route>
        <Route path="/sales/productsalesreport" element={<ProductSalesReportPage/>}></Route>
        <Route path="/sales/invoicereport" element={<Sale/>}></Route>
        <Route path="/sales/customersalesreport" element={<Sale/>}></Route>
        <Route path="/sales/saletransactionreport" element={<Sale/>}></Route>
        
        <Route path="/stockpage" element={<Stock/>}></Route>
        <Route path="/purchase_page" element={<Purchase/>}></Route>
        <Route path="/balance_page" element={<Balance/>}></Route>
        <Route path="/service_page" element={<Service/>}></Route>
        <Route path="/transaction_page" element={<Transaction/>}></Route>
      
      </Routes>
    </Router>
  );
}
   
export default App;