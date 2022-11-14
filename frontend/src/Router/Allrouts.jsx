import { Box, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Detail from "../pages/Detail Page/Detail";
import Nextpayment from "../pages/Payments Page/payment/nextpayment/nextpart";
import Paymentform from "../pages/Payments Page/payment/paymentform";
import BuyNowPayLater from "../pages/Payments Page/payment/PayRoutes/AllpaymentGateway/BuyNowPayLater";
import CreditCard from "../pages/Payments Page/payment/PayRoutes/AllpaymentGateway/CreditCard";
import NetBanking from "../pages/Payments Page/payment/PayRoutes/AllpaymentGateway/NetBanking";
import Upi from "../pages/Payments Page/payment/PayRoutes/AllpaymentGateway/Upi";
import Allitemspage from "../pages/Product Page/Allitemspage";
import CartPage from "../pages/Product Page/CartPage/CartPage";
import Catogarybar from "../pages/Product Page/Catogarybar";
import PricingPage from "../../src/pages/Payments Page/payment/PayRoutes/AllpaymentGateway/PricingPage";
import MainPage from "../pages/Home Page/MainPage";
import Navbar from "../pages/Home Page/Navbar";
import Login from "../pages/Login Page/Login";
import SignUp from "../pages/Signup Page/SignUp";
const Allrouts = () => {
  // const location = useLocation()
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Box>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/Allitems/:category"} element={<Allitemspage />} />
        <Route path="/SingleProduct/:id" element={<Detail />} />
        <Route path="/Cart" element={<CartPage />} />
        <Route path={"/payment"} element={<Paymentform />} />
        <Route path="/" element={<Nextpayment />}>
          <Route path="/nextpayment/upi" element={<Upi />} />
          <Route
            path="/nextpayment/buynowpaylater"
            element={<BuyNowPayLater />}
          />
          <Route path="/nextpayment/netbanking" element={<NetBanking />} />
          <Route path="/nextpayment/wallet" element={<PricingPage />} />
          <Route path="/nextpayment/credit" element={<CreditCard />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Box>
  );
};

export default Allrouts;
