import React from 'react'
import { Route, Routes } from 'react-router'
import Nextpayment from '../nextpayment/nextpart'
import BuyNowPayLater from './AllpaymentGateway/BuyNowPayLater'
import CreditCard from './AllpaymentGateway/CreditCard'
import NetBanking from './AllpaymentGateway/NetBanking'
import PricingPage from './AllpaymentGateway/PricingPage'
import Upi from './AllpaymentGateway/Upi'

const PaymetRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/upi" element={<Upi/> } />
        <Route path="/buynowpaylater" element={<BuyNowPayLater/> } />
        <Route path="/netbanking" element={<NetBanking/> } />
         <Route path="/wallet" element={<PricingPage/> } />
            <Route path="/credit" element={<CreditCard/>}/>
            <Route path="/nextpayment" element={<Nextpayment/>}/>
            
        </Routes>
    </div>
  )
}

export default PaymetRoutes