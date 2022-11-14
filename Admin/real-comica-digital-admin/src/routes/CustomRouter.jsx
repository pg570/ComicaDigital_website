import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import NewProduct from "../pages/newProduct/NewProduct";
import NewUser from "../pages/newUser/NewUser";
import Product from "../pages/product/Product";
import User from "../pages/user/User";
import UserList from "../pages/userList/UserList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from "../components/topbar/Topbar";
import ProductList from "../pages/productList/ProductList";
import { useSelector } from "react-redux";

const Routes = () => {
  const isAdmin = true
  // const token = localStorage(JSON.parse("persist:root"))
  // const token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user.currentUser.token)
  // const Wrong = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user.currentUser.null)
  // console.log(token);
  // const token = useSelector((state) => state.user.currentUser.token);
  // console.log(token);

  return (
    <Router>
      <Switch >
       <Route path="/admin/login">
          <Login />
        </Route>
        {isAdmin && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/admin/dashboard">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default Routes;
