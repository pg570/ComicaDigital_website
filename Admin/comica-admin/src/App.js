import * as React from "react";
import { Admin, ListGuesser, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import authProvider from "./authProvider/authProvider";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="users" list={ListGuesser} />
    <Resource name="posts" list={ListGuesser} />
    <Resource name="products" list={ListGuesser} />
  </Admin>
);

export default App;
