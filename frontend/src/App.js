

import './App.css';

import { Flex } from "@chakra-ui/react";
import "./App.css";
import Allitemspage from "./pages/Product Page/Allitemspage";
import CartPage from "./pages/Product Page/CartPage/CartPage";
import Catogarybar from "./pages/Product Page/Catogarybar";
import Filters from "./pages/Product Page/Filters";
import Allrouts from "./Router/Allrouts";


function App() {
  return (
    <div className="App">
      <Allrouts />
    </div>
  );
}

export default App;

//madhusainadh test
// <Catogarybar/>
//     <CartPage/>
//     <Allitemspage/>
