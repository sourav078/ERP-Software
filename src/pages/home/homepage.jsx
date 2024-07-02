import React from 'react'
import './homepage.css'

import { Link } from 'react-router-dom';

const homepage = () => {
  return (
    <div>
      <div className='card'>
        
      </div>
      <div className="background">
        <div className='card_dashboard'>
        <Link className="button" to="/salepage">Sale</Link>
        <Link className="button" to="/stockpage">Stock</Link>
        <Link className="button" to="/purchase_page">Purchase</Link>
        <Link className="button" to="/transaction_page">Transaction</Link>
        <Link className="button" to="/balance_page">Balance</Link>
        <Link className="button" to="/service_page">Service</Link>
        </div>
        <div className="card_invisible">
          <div className="card3"></div>
          <div className="card4"></div>
          <div className="card3"></div>
          <div className="card4"></div>
        </div>
      </div>
    </div>
  )
}

export default homepage