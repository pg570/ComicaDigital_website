import React from "react";
import { Route, Routes } from "react-router";
import Nextpayment from "../nextpayment/nextpart";
import BuyNowPayLater from "./AllpaymentGateway/BuyNowPayLater";
import CreditCard from "./AllpaymentGateway/CreditCard";
import NetBanking from "./AllpaymentGateway/NetBanking";
import PricingPage from "./AllpaymentGateway/PricingPage";
import Upi from "./AllpaymentGateway/Upi";

const PaymetRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/nextpayment/upi" element={<Upi />} />
        <Route path="/nextpayment/buynowpaylater" element={<BuyNowPayLater />} />
        <Route path="/nextpayment/netbanking" element={<NetBanking />} />
        <Route path="/nextpayment/wallet" element={<PricingPage />} />
        <Route path="/nextpayment/credit" element={<CreditCard />} />
        
      </Routes>
    </div>
  );
};

export default PaymetRoutes;
