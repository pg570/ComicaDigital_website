import "./App.css";

import { Box, Flex } from "@chakra-ui/react";
import "./App.css";
import Login from "./pages/Login Page/Login";
import Allitemspage from "./pages/Product Page/Allitemspage";
import CartPage from "./pages/Product Page/CartPage/CartPage";
import Catogarybar from "./pages/Product Page/Catogarybar";
import Filters from "./pages/Product Page/Filters";
import SignUp from "./pages/Signup Page/SignUp";
import Allrouts from "./Router/Allrouts";
import MainPage from "./pages/Home Page/MainPage";
import Navbar from "./pages/Home Page/Navbar";
import Footer from "./pages/Home Page/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Allrouts />
      <Box color={"white"}>
        <Footer />
      </Box>
    </div>
  );
}

export default App;
// <Allrouts />
//madhusainadh test
// <Catogarybar/>
//     <CartPage/>
//     <Allitemspage/>
