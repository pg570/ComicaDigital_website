import { Flex } from "@chakra-ui/react";
import "./App.css";
import MainPage from "./pages/Home Page/MainPage";
import Login from "./pages/Login Page/Login";
import Allitemspage from "./pages/Product Page/Allitemspage";
import CartPage from "./pages/Product Page/CartPage/CartPage";
import Catogarybar from "./pages/Product Page/Catogarybar";
import Filters from "./pages/Product Page/Filters";
import SignUp from "./pages/Signup Page/SignUp";
import Allrouts from "./Router/Allrouts";

function App() {
  return (
    <div className="App">
      {/* <SignUp/> */}
      <Login/>
      {/* <Allrouts /> */}
    </div>
  );
}

export default App;

//madhusainadh test
// <Catogarybar/>
//     <CartPage/>
//     <Allitemspage/>
